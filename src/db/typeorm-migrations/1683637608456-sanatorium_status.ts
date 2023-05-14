import type { MigrationInterface, QueryRunner } from "typeorm";

export class sanatoriumStatus1683637608456 implements MigrationInterface {
    name = 'sanatoriumStatus1683637608456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."sanatorium_status_enum" AS ENUM('pending', 'active', 'rejected')`);
        await queryRunner.query(`ALTER TABLE "sanatorium" ADD "status" "public"."sanatorium_status_enum" NOT NULL DEFAULT 'pending'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sanatorium" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."sanatorium_status_enum"`);
    }

}
