import { Controller, Get } from '@nestjs/common';

import type { Services } from './interfaces/services.interface';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(
    private readonly service:ServicesService,
  ) {}

  @Get('')
  public async getBasic():Promise<Services[]> {
    return this.service.getBasic();
  }
}
