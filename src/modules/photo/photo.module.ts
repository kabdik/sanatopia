import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotoController } from './photo.controller';
import { PhotoEntity } from './photo.entity';
import { PhotoService } from './photo.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoEntity])],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
