'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiculesSchema extends Schema {
  up () {
    this.alter('vehicules', table => {
      table.string('notes')
    })
  }

  down () {
    this.table('vehicules', table => {
      // reverse alternations
    })
  }
}

module.exports = VehiculesSchema
