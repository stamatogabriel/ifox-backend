'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiculesSchema extends Schema {
  up() {
    this.create('vehicules', (table) => {
      table.increments()
      table.string('license', 8).notNullable().unique()
      table.string('truck_type', 15).notNullable().unique()
      table.string('max_volume', 7).notNullable()
      table.string('attachment', 8).references('license')
      table.string('second_attachment', 8).references('license')
      table.timestamps()
    })
  }

  down() {
    this.drop('vehicules')
  }
}

module.exports = VehiculesSchema
