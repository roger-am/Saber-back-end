import { MigrationInterface, QueryRunner } from "typeorm";

export class default1694394672672 implements MigrationInterface {
    name = 'default1694394672672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Client" ("id" SERIAL NOT NULL, "fullName" text NOT NULL, "maritalStatus" text NOT NULL, "cpf" text NOT NULL, "createDate" TIMESTAMP NOT NULL, "birthDate" TIMESTAMP NOT NULL, "lastUpdate" TIMESTAMP, CONSTRAINT "PK_b79874c8d411b839b9ccc301972" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Client"`);
    }

}
