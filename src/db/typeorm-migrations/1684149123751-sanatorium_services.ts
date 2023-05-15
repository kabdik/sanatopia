import type { MigrationInterface, QueryRunner } from "typeorm";

export class sanatoriumServices1684149123751 implements MigrationInterface {
    name = 'sanatoriumServices1684149123751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sanatorium_services" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "sanatoriumId" integer NOT NULL, "serviceId" integer NOT NULL, CONSTRAINT "PK_11f6c98ae53ebe1cf91444a7365" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sanatorium_services" ADD CONSTRAINT "FK_f4f3ee5686b3369c48cf19c7fe6" FOREIGN KEY ("sanatoriumId") REFERENCES "sanatorium"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "sanatorium_services" ADD CONSTRAINT "FK_22422b0ea2eb5ea9c5717ad8b84" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sanatorium_services" DROP CONSTRAINT "FK_22422b0ea2eb5ea9c5717ad8b84"`);
        await queryRunner.query(`ALTER TABLE "sanatorium_services" DROP CONSTRAINT "FK_f4f3ee5686b3369c48cf19c7fe6"`);
        await queryRunner.query(`DROP TABLE "sanatorium_services"`);
    }

}
