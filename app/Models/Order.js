'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  drivers () {
    return this.belongsTo('App/Models/Driver')
  }

  vehicules () {
    return this.belongsToMany('App/Models/Vehicule')
  }
}

module.exports = Order
