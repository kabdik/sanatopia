import type { MigrationInterface, QueryRunner } from "typeorm";

export class facility1684091115394 implements MigrationInterface {
    name = 'facility1684091115394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "facilities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2e6c685b2e1195e6d6394a22bc7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "facilities"`);
    }

}
