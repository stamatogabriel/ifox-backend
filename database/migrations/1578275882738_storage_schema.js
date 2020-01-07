'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StorageSchema extends Schema {
  up() {
    this.create('storages', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('street', 50).notNullable()
      table.integer('number').notNullable()
      table.string('neighborhood', 50).notNullable()
      table.string('city', 40).notNullable()
      table.string('uf', 2).notNullable()
      table.string('zipcode', 10).notNullable()
      table.string('contact', 50)
      table.string('phone', 14)
      table.timestamps()
    })
  }

  down() {
    this.drop('storages')
  }
}

module.exports = StorageSchema
