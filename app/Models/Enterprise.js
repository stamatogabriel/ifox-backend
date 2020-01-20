'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Enterprise extends Model {
  contract() {
    return this.hasMany('App/Models/Contract')
  }

  partners_contracts() {
    return this.hasMany('App/Models/PartnersContract')
  }
}

module.exports = Enterprise
