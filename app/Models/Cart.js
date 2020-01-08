'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cart extends Model {
  vehicules() {
    return this.hasMany('App/Models/Vehicules')
  }
}

module.exports = Cart
