import { Body, Controller, Post } from '@nestjs/common';

import { createOwnerDto } from './dto/create-owner.dto';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {
  }

  @Post('/registration')
  public async create(@Body() data:createOwnerDto):Promise<void> {
    await this.ownerService.create(data);
  }
}
