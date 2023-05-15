import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { OwnerService } from '../owner/owner.service';
import { RoomService } from '../room/room.service';
import { TreatmentService } from '../treatment/treatment.service';
import type { CreateSanatoriumBodyDto } from './dto/create-sanatorium-body.dto';
import type { CreateSanatoriumRequestDto } from './dto/create-sanatorium-request.dto';
import { SanatoriumPhotoEntity } from './entities/sanatorium-photo.entity';
import { SanatoriumServicesEntity } from './entities/sanatorium-services.entity';
import { SanatoriumEntity } from './entities/sanatorium.entity';

@Injectable()
export class SanatoriumService {
  constructor(
    @InjectRepository(SanatoriumEntity)
    private readonly sanatoriumRepo: Repository<SanatoriumEntity>,
    private readonly treatmentService: TreatmentService,
    private readonly roomService: RoomService,
    private readonly ownerService: OwnerService,
  ) {}

  public async createRequest({ sanatorium: sanatoriumBody, owner: ownerBody }: CreateSanatoriumRequestDto): Promise<void> {
    await this.sanatoriumRepo.manager.transaction(async (em: EntityManager) => {
      const owner = await this.ownerService.create(ownerBody, em);
      await this.createSanatorium(sanatoriumBody, owner.id, em);
    });
  }

  private async createSanatorium(
    { rooms, treatments, customTreatments, imageIds, services, ...data }: CreateSanatoriumBodyDto,
    ownerId:number,
    entityManager?: EntityManager,
  ): Promise<SanatoriumEntity> {
    const em = entityManager || this.sanatoriumRepo.manager;

    if (await em.findOne(SanatoriumEntity, { where: { name: data.name } })) {
      throw new BadRequestException('The sanatorium already exists');
    }

    const sanatorium = em.create(SanatoriumEntity, { ...data });
    sanatorium.rooms = await this.roomService.createToSanatorium(rooms, em);

    sanatorium.treatments = await this.treatmentService.createToSanatorium(treatments, em, customTreatments);
    sanatorium.ownerId = ownerId;
    await em.save(SanatoriumEntity, sanatorium);

    const sanatoriumPhotos = imageIds.map((photoId: number) => ({ sanatoriumId: sanatorium.id, photoId }));
    await em.save(SanatoriumPhotoEntity, sanatoriumPhotos);

    const sanatoriumServices = services.map((serviceId: number) => ({ sanatoriumId: sanatorium.id, serviceId }));
    await em.save(SanatoriumServicesEntity, sanatoriumServices);
    return sanatorium;
  }
}
