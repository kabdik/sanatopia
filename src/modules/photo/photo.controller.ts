import { Controller, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import type { Photo } from './photo.interface';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService:PhotoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async upload(@UploadedFile() file: Express.Multer.File): Promise<Photo> {
    console.log(file);

    if (file.mimetype.split('/')[0] !== 'image') {
      throw new HttpException('File is not image', HttpStatus.UNPROCESSABLE_ENTITY);
    }
    return this.photoService.upload(
      file.buffer,
      file.mimetype.split('/')[1],
    );
  }
}
