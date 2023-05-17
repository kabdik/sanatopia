import { Controller, Get } from '@nestjs/common';

import { FacilitiesService } from './facilities.service';
import type { Facility } from './interfaces/facility.interface';

@Controller('facilities')
export class FacilitiesController {
  constructor(
    private readonly facilityService:FacilitiesService,
  ) {}

  @Get('')
  public async getBasic():Promise<Facility[]> {
    return this.facilityService.getBasic();
  }
}
