'use strict'
const Order = use('App/Models/Order')
class OrderController {
  async index ({ request, response, view }) {
    const orders = await Order.all()

    return orders
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = OrderController
