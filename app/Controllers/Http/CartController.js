'use strict'
const Cart = use('App/Models/Cart')

class CartController {

  async index({ request, response, view }) {
    const carts = await Cart.all()

    return carts
  }

  async store({ request, response }) {
    const data = request.all()
    const cart = await Cart.create(data)

    return cart
  }

  async show({ params, request, response, view }) {
    const cart = await Cart.findOrFail(params.id)

    return cart
  }

  async update({ params, request, response }) {
    const { license, max_volume } = request.all()
    const cart = await Cart.findOrFail(params.id)

    !license ? null : cart.license = license
    !max_volume ? null : cart.max_volume = max_volume

    cart.save()

    return cart
  }

  async destroy({ params, request, response }) {
    const cart = await Cart.findOrFail(params.id)

    cart.delete()
  }
}

module.exports = CartController
