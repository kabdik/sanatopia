import type { MigrationInterface, QueryRunner } from "typeorm";

export class treatment1683636646209 implements MigrationInterface {
    name = 'treatment1683636646209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "treatment" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5ed256f72665dee35f8e47b416e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "treatment"`);
    }

}
