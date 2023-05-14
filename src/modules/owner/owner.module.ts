import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../user/user.module';
import { OwnerEntity } from './entities/owner.entity';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerEntity]), UserModule],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
