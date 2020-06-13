'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnterpriseSchema extends Schema {
  up () {
    this.alter('enterprises', table => {
      table.float('credit')
      table.float('monthly_volume')
      table
        .integer('storage_id')
        .references('id')
        .inTable('storages')
        .unsigned()
        .onUpdate('CASCADE')
    })
  }

  down () {
    this.table('enterprises', table => {
      // reverse alternations
    })
  }
}

module.exports = EnterpriseSchema
