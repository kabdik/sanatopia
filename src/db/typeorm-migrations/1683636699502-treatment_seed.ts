import { TreatmentEntity } from '@/modules/treatment/entities/treatment.entity';
import _ from 'lodash';
import { In, MigrationInterface, QueryRunner } from 'typeorm';

const treatments = require('../fixtures/treatments.json');

export class treatmentSeed1683636699502 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(TreatmentEntity, treatments);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(TreatmentEntity, { id: In(_.map(treatments, 'id')) });
  }
}
