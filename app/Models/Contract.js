'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contract extends Model {
  partners_contract() {
    return this.belongsTo('App/Models/PartnersContract')
  }
}

module.exports = Contract
