import type { MigrationInterface, QueryRunner } from "typeorm";

export class init1683561360705 implements MigrationInterface {
    name = 'init1683561360705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'user', 'staff')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "email" character varying NOT NULL, "phone" text NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'user', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sanatorium" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "rating" integer NOT NULL, "address" text NOT NULL, "contactName" character varying NOT NULL, "contactPhone" character varying NOT NULL, "ownerId" integer NOT NULL, CONSTRAINT "CHK_2e80195ef8b6f7dc6147525802" CHECK ("rating" >= 0.00 AND "rating" <= 5.00), CONSTRAINT "PK_69676c3a573a2014396c6ddcd45" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sanatorium"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }

}
