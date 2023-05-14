import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';

import { S3Service } from '@/common/providers/s3.service';

import { PhotoEntity } from './photo.entity';
import type { Photo } from './photo.interface';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photoRepo:Repository<PhotoEntity>,
    private readonly s3:S3Service,
  ) {}

  public async upload(dataBuffer: Buffer, imageType: string):Promise<Photo> {
    const url = await this.s3.uploadFile(dataBuffer, imageType);
    return this.photoRepo.save({ url });
  }
}
