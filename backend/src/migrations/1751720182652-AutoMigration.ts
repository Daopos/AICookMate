import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1751720182652 implements MigrationInterface {
    name = 'AutoMigration1751720182652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "emai" TO "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "email" TO "emai"`);
    }

}
