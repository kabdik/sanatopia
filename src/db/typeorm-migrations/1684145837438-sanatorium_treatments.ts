import type { MigrationInterface, QueryRunner } from "typeorm";

export class sanatoriumTreatments1684145837438 implements MigrationInterface {
    name = 'sanatoriumTreatments1684145837438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sanatorium_treatments" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "sanatoriumId" integer NOT NULL, "treatment" character varying NOT NULL, "price" numeric(10,2), CONSTRAINT "PK_e3105b9a44cef37c44ef6d417f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sanatorium_treatments" ADD CONSTRAINT "FK_3d7230eff32b325383b75603880" FOREIGN KEY ("sanatoriumId") REFERENCES "sanatorium"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sanatorium_treatments" DROP CONSTRAINT "FK_3d7230eff32b325383b75603880"`);
        await queryRunner.query(`DROP TABLE "sanatorium_treatments"`);
    }

}
