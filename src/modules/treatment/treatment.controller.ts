import { Controller, Get } from '@nestjs/common';

import type { Treatment } from './interfaces/treatment.interface';
import { TreatmentService } from './treatment.service';

@Controller('treatment')
export class TreatmentController {
  constructor(
    private readonly treatmentService:TreatmentService,
  ) {}

  @Get('')
  public async getBasic():Promise<Treatment[]> {
    return this.treatmentService.getBasic();
  }
}
