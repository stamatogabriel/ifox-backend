'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnterpriseGroupSchema extends Schema {
  up () {
    this.alter('enterprise_groups', (table) => {
      table.string('street', 50).notNullable()
      table.integer('number').notNullable()
      table.string('neighborhood', 50).notNullable()
      table.string('complement', 50)
      table.string('city', 40).notNullable()
      table.string('uf', 2).notNullable()
      table.string('zipcode', 10).notNullable()
      table.string('phone', 15).notNullable()
    })
  }

  down () {
    this.table('enterprise_groups', (table) => {
      // reverse alternations
    })
  }
}

module.exports = EnterpriseGroupSchema
