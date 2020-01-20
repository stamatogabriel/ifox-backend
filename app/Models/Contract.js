'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contract extends Model {
  storages() {
    return this.belongsTo('App/Models/Storage')
  }

  partners_contracts() {
    return this.hasMany('App/Models/PartnersContract')
  }
}

module.exports = Contract
