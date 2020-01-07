'use strict'
const Enterprise = use('App/Models/Enterprise')

class EnterpriseController {

  async index({ request, response, view }) {
    const enterprises = await Enterprise.all()

    return enterprises
  }

  async store({ request, response }) {
    const data = request.all()

    const enterprise = await Enterprise.create(data)

    return enterprise
  }

  async show({ params, request, response, view }) {
    const enterprise = await Enterprise.findOrFail(params.id)

    return enterprise
  }

  async update({ params, request, response }) {
    const {
      corporate_name,
      cnpj,
      ie,
      street,
      number,
      neighborhood,
      city,
      uf,
      zipcode,
      contact,
      phone,
      cellphone,
      type
    } = request.all()

    const enterprise = await Enterprise.findOrFail(params.id)

    !corporate_name ? null : enterprise.corporate_name = corporate_name
    !cnpj ? null : enterprise.cnpj = cnpj
    !ie ? null : enterprise.ie = ie
    !street ? null : enterprise.street = street
    !number ? null : enterprise.number = number
    !neighborhood ? null : enterprise.neighborhood = neighborhood
    !city ? null : enterprise.city = city
    !uf ? null : enterprise.uf = uf
    !zipcode ? null : enterprise.zipcode = zipcode
    !contact ? null : enterprise.contact = contact
    !phone ? null : enterprise.phone = phone
    !cellphone ? null : enterprise.cellphone = cellphone
    !type ? null : enterprise.type = type

    enterprise.save()

    return enterprise
  }

  async destroy({ params, request, response }) {
    const enterprise = await Enterprise.findOrFail(params.id)

    enterprise.delete()
  }
}

module.exports = EnterpriseController
