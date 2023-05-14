import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { SanatoriumEntity } from './entities/sanatorium.entity';

@Injectable()
export class SanatoriumService {
  constructor(
    @InjectRepository(SanatoriumEntity)
    private readonly sanatoriumRepo: Repository<SanatoriumEntity>,
  ) {}

  public async create():Promise<void> {
    await this.sanatoriumRepo.findOne({ where: { id: 2 } });
  }
}
