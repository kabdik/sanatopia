import type { MigrationInterface, QueryRunner } from "typeorm";

export class sanatoriumPhoto1684139357337 implements MigrationInterface {
    name = 'sanatoriumPhoto1684139357337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sanatorium_photo" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "sanatoriumId" integer NOT NULL, "photoId" integer NOT NULL, CONSTRAINT "PK_043916328b42eff1c24e9ad7ef3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sanatorium_photo" ADD CONSTRAINT "FK_02ed2e0ad738ffd0f504a6b5443" FOREIGN KEY ("sanatoriumId") REFERENCES "sanatorium"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sanatorium_photo" ADD CONSTRAINT "FK_f40a3c4429e5dff7f528b4d189c" FOREIGN KEY ("photoId") REFERENCES "photo"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sanatorium_photo" DROP CONSTRAINT "FK_f40a3c4429e5dff7f528b4d189c"`);
        await queryRunner.query(`ALTER TABLE "sanatorium_photo" DROP CONSTRAINT "FK_02ed2e0ad738ffd0f504a6b5443"`);
        await queryRunner.query(`DROP TABLE "sanatorium_photo"`);
    }

}
