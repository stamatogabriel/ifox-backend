'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SellSchema extends Schema {
  up () {
    this.alter('sells', (table) => {
      table.string('type_freigth')
    })
  }

  down () {
    this.table('sells', (table) => {
      // reverse alternations
    })
  }
}

module.exports = SellSchema
