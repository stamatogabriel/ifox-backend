'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DriverSchema extends Schema {
  up() {
    this.create('drivers', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('cpf', 14).notNullable().unique()
      table.string('rg', 20).notNullable().unique()
      table.string('cnh', 20)
      table.string('cnh_category', 2)
      table.string('phone', 15)
      table.timestamps()
    })
  }

  down() {
    this.drop('drivers')
  }
}

module.exports = DriverSchema
