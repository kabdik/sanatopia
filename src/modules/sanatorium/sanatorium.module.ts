import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OwnerModule } from '../owner/owner.module';
import { RoomModule } from '../room/room.module';
import { TreatmentModule } from '../treatment/treatment.module';
import { SanatoriumEntity } from './entities/sanatorium.entity';
import { SanatoriumController } from './sanatorium.controller';
import { SanatoriumService } from './sanatorium.service';

@Module({
  imports: [TypeOrmModule.forFeature([SanatoriumEntity]), TreatmentModule, RoomModule, OwnerModule],
  controllers: [SanatoriumController],
  providers: [SanatoriumService],
})
export class SanatoriumModule {}
