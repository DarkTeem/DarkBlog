import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts_metadata'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().index()
      table.increments('post_id').notNullable().references('id').inTable('posts').onDelete('CASCADE')
      table.string('meta_key').notNullable()
      table.string('meta_value').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.unique(['post_id', 'meta_key'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
