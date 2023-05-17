import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FacilityEntity } from './entities/facilities.entity';
import { FacilitiesController } from './facilities.controller';
import { FacilitiesService } from './facilities.service';

@Module({
  imports: [TypeOrmModule.forFeature([FacilityEntity])],
  providers: [FacilitiesService],
  controllers: [FacilitiesController],
})
export class FacilitiesModule {}
