import { FacilityEntity } from '@/modules/room/entities/facilities.entity';
import type { Facility } from '@/modules/room/interfaces/facility.interface';
import _ from 'lodash';
import { In, MigrationInterface, QueryRunner } from 'typeorm';

const facilities: Facility[] = require('../fixtures/facilities.json');
export class facilitySeed1684137366425 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(FacilityEntity, facilities);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(FacilityEntity, { id: In(_.map(facilities, 'id')) });
  }
}
