'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehicule extends Model {
  carts() {
    return this.belongsToMany('App/Models/Cart')
  }
}

module.exports = Vehicule
