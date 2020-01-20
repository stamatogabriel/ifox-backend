'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PartnersContractSchema extends Schema {
  up() {
    this.create('partners_contracts', (table) => {
      table.increments()
      table.integer('contract_id').references('id').inTable('contracts').unsigned()
      table.integer('partner_id').references('id').inTable('enterprises').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('partners_contracts')
  }
}

module.exports = PartnersContractSchema
