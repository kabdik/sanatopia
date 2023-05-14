import type { MigrationInterface, QueryRunner } from "typeorm";

export class sanatoriumRoomRelation1683639734691 implements MigrationInterface {
    name = 'sanatoriumRoomRelation1683639734691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "UQ_a458104dbed63cfbe1d67509d4b"`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_1dc815db3ec162fcb4b2a4298a5" FOREIGN KEY ("sanatoriumId") REFERENCES "sanatorium"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_1dc815db3ec162fcb4b2a4298a5"`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "UQ_a458104dbed63cfbe1d67509d4b" UNIQUE ("type")`);
    }

}
