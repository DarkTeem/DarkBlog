import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'settings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
     table.increments('id').primary().index()
      table.enum('type', ['string', 'number', 'boolean','array', 'object','other']).notNullable()
      table.string('key').notNullable().unique()
      table.string('value').notNullable()
      table.string('group').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })


    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
