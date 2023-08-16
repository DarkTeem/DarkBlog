import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts_details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
    table.increments('id').primary().index()
      table.increments('post_id').notNullable().unique().references('id').inTable('posts').onDelete('CASCADE')
      table.string('sub_title', 255).nullable()
      table.string('refferance', 255).nullable()

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
