import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1751696008943 implements MigrationInterface {
    name = 'AutoMigration1751696008943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "provider_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "provider" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "provider" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "provider_id" SET NOT NULL`);
    }

}
