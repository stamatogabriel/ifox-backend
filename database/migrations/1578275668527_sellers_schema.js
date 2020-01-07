'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SellersSchema extends Schema {
  up() {
    this.create('sellers', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('cpf', 14).notNullable()
      table.string('phone', 14).notNullable()
      table.string('cellphone', 14).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('sellers')
  }
}

module.exports = SellersSchema
