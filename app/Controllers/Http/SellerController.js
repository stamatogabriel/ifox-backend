'use strict'
const Seller = use('App/Models/Seller')

class SellerController {
  async index({ request, response, view }) {
    const sellers = await Seller.all()

    return sellers
  }

  async store({ request, response }) {
    const data = request.all()

    const seller = await Seller.create(data)

    return seller
  }

  async show({ params, request, response, view }) {
    const seller = await Seller.findOrFail(params.id)

    return seller
  }

  async update({ params, request, response }) {
    const {
      name,
      cpf,
      phone,
      cellphone,
    } = request.all()
    const seller = await Seller.findOrFail(params.id)

    !name ? null : seller.name = name
    !cpf ? null : seller.cpf = cpf
    !phone ? null : seller.phone = phone
    !cellphone ? null : seller.cellphone = cellphone

    seller.save()

    return seller
  }

  async destroy({ params, request, response }) {
    const seller = await Seller.findOrFail(params.id)

    seller.delete()
  }
}

module.exports = SellerController
