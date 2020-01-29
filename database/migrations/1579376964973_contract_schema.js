'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContractSchema extends Schema {
  up() {
    this.create('contracts', (table) => {
      table.increments()
      table.integer('storage_id').references('id').inTable('storages').notNullable().unsigned().onUpdate('CASCADE')
      table.string('contract_number').notNullable()
      table.integer('enterprise_id').references('id').inTable('enterprises').notNullable().unsigned().onUpdate('CASCADE')
      table.integer('product_id').references('id').inTable('products').notNullable().unsigned().onUpdate('CASCADE')
      table.float('volume').notNullable()
      table.float('unitary_price').notNullable()
      table.float('to_pay')
      table.float('to_load')
      table.float('paied')
      table.float('spread')
      table.float('brokerage')
      table.float('storage_cust')
      table.float('freight')
      table.float('total_cust')
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
