import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { ServicesEntity } from './entities/services.entity';
import type { Services } from './interfaces/services.interface';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServicesEntity)
    private readonly serviceRepo:Repository<ServicesEntity>,
  ) {}

  public async getBasic():Promise<Services[]> {
    return this.serviceRepo.find();
  }
}
