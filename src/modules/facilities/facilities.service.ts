import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { FacilityEntity } from './entities/facilities.entity';
import type { Facility } from './interfaces/facility.interface';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectRepository(FacilityEntity)
    private readonly facilityRepo:Repository<FacilityEntity>,
  ) {}

  public async getBasic():Promise<Facility[]> {
    return this.facilityRepo.find();
  }
}
