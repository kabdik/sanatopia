import type { MigrationInterface, QueryRunner } from "typeorm";

export class roomFacilities1684147076492 implements MigrationInterface {
    name = 'roomFacilities1684147076492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "room_facilities" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "roomId" integer NOT NULL, "facilityId" integer NOT NULL, CONSTRAINT "PK_2fdf9297bb25ee35cb68f5475ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "room_facilities" ADD CONSTRAINT "FK_d71e2d179153f54a2b070464eb9" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_facilities" ADD CONSTRAINT "FK_7fa850d4cf73e035e5ec82d0fa7" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_facilities" DROP CONSTRAINT "FK_7fa850d4cf73e035e5ec82d0fa7"`);
        await queryRunner.query(`ALTER TABLE "room_facilities" DROP CONSTRAINT "FK_d71e2d179153f54a2b070464eb9"`);
        await queryRunner.query(`DROP TABLE "room_facilities"`);
    }

}
