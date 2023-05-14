import type { MigrationInterface, QueryRunner } from "typeorm";

export class room1683639267497 implements MigrationInterface {
    name = 'room1683639267497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."room_type_enum" AS ENUM('classic', 'semi-lux', 'lux', 'royal')`);
        await queryRunner.query(`CREATE TABLE "room" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "type" "public"."room_type_enum" NOT NULL, "sanatoriumId" integer NOT NULL, "surfaceArea" double precision, "capacity" integer NOT NULL, "pricePerDay" numeric(10,2) NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "UQ_a458104dbed63cfbe1d67509d4b" UNIQUE ("type"), CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TYPE "public"."room_type_enum"`);
    }

}
