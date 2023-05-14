import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { EntityManager, Repository } from 'typeorm';

import { UserRole } from '../user/enums/user-role.enum';
import { UserService } from '../user/user.service';
import type { createOwnerDto } from './dto/create-owner.dto';
import { OwnerEntity } from './entities/owner.entity';
import type { Owner } from './interfaces/owner.interface';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(OwnerEntity)
    private readonly ownerRepo: Repository<OwnerEntity>,
    private readonly userService: UserService,
  ) {}

  public async create(data: createOwnerDto): Promise<void> {
    await this.ownerRepo.manager.transaction(async (em: EntityManager) => {
      const user = await this.userService.create({ ...data, role: UserRole.OWNER }, em);
      const owner = <Owner>em.create(OwnerEntity);
      owner.userId = user.id;
      await em.save(OwnerEntity, owner);
    });
  }
}
