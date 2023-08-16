import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().index()

      table.string('title', 255).notNullable()
      table.string('slug',128).notNullable()
      table.string('keywords',255).nullable()
      table.string('description',255).nullable()
      table.text('content').nullable()

      table.integer('category_id').unsigned().nullable()
      table.text('type').nullable().defaultTo('page')
      table.boolean('is_system_post').defaultTo(false)
      table.increments('publisher_id').nullable().references('id').inTable('users').onDelete('CASCADE')
      table.enum('status', ['draft', 'published', 'archived','deleted']).defaultTo('draft').nullable()

       table.string('template').nullable().defaultTo('default')


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
