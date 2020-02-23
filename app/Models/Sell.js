'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sell extends Model {
  sellers() {
    return this.hasOne('App/Models/Sellers')
  }

  contracts() {
    return this.hasOne('App/Models/Contracts')
  }

  enterprises() {
    return this.hasOne('App/Models/Enterprise')
  }
}

module.exports = Sell
