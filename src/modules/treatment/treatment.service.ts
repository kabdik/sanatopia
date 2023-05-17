import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import _ from 'lodash';
import { EntityManager, In, Repository } from 'typeorm';

import { SanatoriumTreatmentsEntity } from '../sanatorium/entities/sanatorium-treatments.entity';
import type { CreateSanatoriumCustomTreatmentDto, CreateSanatoriumTreatmentDto } from './dto/create-treatment.dto';
import { TreatmentEntity } from './entities/treatment.entity';
import type { Treatment } from './interfaces/treatment.interface';

@Injectable()
export class TreatmentService {
  constructor(
    @InjectRepository(TreatmentEntity)
    private readonly treatmentRepo: Repository<TreatmentEntity>,
  ) {}

  public async createToSanatorium(
    treatmentsData: CreateSanatoriumTreatmentDto[],
    em: EntityManager,
    customTreatmentsData?: CreateSanatoriumCustomTreatmentDto[],
  ): Promise<SanatoriumTreatmentsEntity[]> {
    const dbTreatments = await em.find(TreatmentEntity, { where: { id: In(_.map(treatmentsData, 'id')) } });
    let treatments = <{ price?: number; treatment: string }[]>treatmentsData.map((treatmentData: CreateSanatoriumTreatmentDto) => ({
      price: treatmentData.price,
      treatment: dbTreatments.find((dbTreatment: Treatment) => dbTreatment.id === treatmentData.id)?.name,
    }));
    if (customTreatmentsData) {
      treatments = treatments.concat(customTreatmentsData);
    }

    return em.create(SanatoriumTreatmentsEntity, treatments);
  }

  public async getBasic():Promise<Treatment[]> {
    return this.treatmentRepo.find();
  }
}
