'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CartSchema extends Schema {
  up() {
    this.create('carts', (table) => {
      table.increments()
      table.string('license', 8).notNullable().unique()
      table.string('max_volume', 7).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('carts')
  }
}

module.exports = CartSchema
