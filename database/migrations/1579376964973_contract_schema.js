'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContractSchema extends Schema {
  up() {
    this.create('contracts', (table) => {
      table.increments()
      table.integer('storage_id').references('id').inTable('storages').notNullable().unsigned()
      table.string('contract_number').notNullable()
      table.integer('distributor_id').references('id').inTable('enterprises').notNullable().unsigned()
      table.float('volume').notNullable()
      table.float('unitary_price').notNullable()
      table.float('to_pay')
      table.float('to_load')
      table.float('paied')
      table.float('total').notNullable()
      table.string('notes')
      table.timestamps()
    })
  }

  down() {
    this.drop('contracts')
  }
}

module.exports = ContractSchema
