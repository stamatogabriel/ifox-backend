'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      table.string('oc_number').notNullable()
      table.integer('id_driver').references('id').inTable('drivers').notNullable()
      table.integer('id_truck').references('id').inTable('vehicules').notNullable()
      table.integer('id_first_chart').references('id').inTable('vehicules')
      table.integer('id_second_chart').references('id').inTable('vehicules')
      table.float('volume').notNullable()
      table.integer('id_clients').references('id').inTable('clients_orders')
      table.integer('contract_id').references('id').inTable('contracts')
      table.string('notes')
      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
