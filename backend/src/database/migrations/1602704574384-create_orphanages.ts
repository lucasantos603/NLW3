import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602704574384 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable((new Table({
            name: 'orphanages',
      columns:[
      //Coluna Id
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },

        //Coluna nome
        {
          name: 'name',
          type: 'varchar'
        },

        //coluna latitude
        {
          name: 'latitude',
          type: "decimal",
          scale: 10,
          precision: 2,
        },

        //coluna longitude
        {
          name: 'longitude',
          type: "decimal",
          scale: 10,
          precision: 2,
        },

        //coluna about
        {
          name: 'about',
          type: 'text'
        },

        //coluna instructions(intruções)
        {
          name: 'instructions',
          type: 'text',
        },

        //Coluna opening_hours
        {
          name: 'opening_hours',
          type: 'varchar'
        },

        //Coluna Open-on-weekends(abertos nos fins de semana)
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        }
      ]
        })))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
