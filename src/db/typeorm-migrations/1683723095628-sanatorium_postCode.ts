import type { MigrationInterface, QueryRunner } from "typeorm";

export class sanatoriumPostCode1683723095628 implements MigrationInterface {
    name = 'sanatoriumPostCode1683723095628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sanatorium" ADD "postCode" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sanatorium" DROP COLUMN "postCode"`);
    }

}
