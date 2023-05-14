import { Body, Controller, Post } from '@nestjs/common';

import { CreateSanatoriumRequestDto } from './dto/create-sanatorium-request.dto';
import { SanatoriumService } from './sanatorium.service';

@Controller('sanatorium')
export class SanatoriumController {
  constructor(private readonly sanatoriumService:SanatoriumService) {}

  @Post('')
  public async createRequest(@Body() data:CreateSanatoriumRequestDto):Promise<void> {
    console.log(data);

    await this.sanatoriumService.create();
  }
}
