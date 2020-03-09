'use strict'

const Order = use('App/Models/Order')
class OrderListController {
  async index () {
    const orders = await Order.all()

    return orders
  }
}

module.exports = OrderListController
