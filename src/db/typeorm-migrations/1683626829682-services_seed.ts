import { ServicesEntity } from '@/modules/services/entities/services.entity';
import type { Services } from '@/modules/services/interfaces/services.interface';
import _ from 'lodash';
import { In, MigrationInterface, QueryRunner } from 'typeorm';

const services: Services[] = require('../fixtures/services.json');

export class servicesSeed1683626829682 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert(ServicesEntity, services);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(ServicesEntity, { id: In(_.map(services, 'id')) });
  }
}
