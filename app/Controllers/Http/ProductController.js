'use strict'
const Product = use('App/Models/Product')
class ProductController {

  async index({ request, response, view }) {
    const products = Product.all()

    return products
  }

  async store({ request, response }) {
    const data = request.all()

    const product = await Product.create(data)

    return product
  }

  async show({ params, request, response, view }) {
    const product = await Product.findOrFail(params.id)

    return product
  }

  async update({ params, request, response }) {
    const { description } = request.all()

    const product = await Product.findOrFail(params.id)

    product.description = description

    return product
  }

  async destroy({ params, request, response }) {
    const product = await Product.findOrFail(params.id)

    product.delete()
  }
}

module.exports = ProductController
