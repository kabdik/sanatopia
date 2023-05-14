import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SanatoriumEntity } from './entities/sanatorium.entity';
import { SanatoriumController } from './sanatorium.controller';
import { SanatoriumService } from './sanatorium.service';

@Module({
  imports: [TypeOrmModule.forFeature([SanatoriumEntity])],
  controllers: [SanatoriumController],
  providers: [SanatoriumService],
})
export class SanatoriumModule {}
