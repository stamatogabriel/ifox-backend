'use strict'
const PartnersContract = use('App/Models/PartnersContract')

class PartnersContractController {
  async index ({ request, response, view }) {
    const partners = await PartnersContract.all()

    return partners
  }

  async store ({ request, response }) {
    const data = request.only(['contract_id', 'partner_id'])

    const partner = await PartnersContract.create(data)

    return partner
  }

  /* async show({ params, request, response, view }) {

    const partner = await PartnersContract.findOrFail(params.id)

    const partner
  } */

  async update ({ params, request, response }) {
    const data = request.only(['contract_id', 'partner_id'])

    const partner = await PartnersContract.findOrFail(params.id)

    partner.merge(data)

    partner.save()

    return partner
  }

  async destroy ({ params, request, response }) {
    const partner = await PartnersContract.findOrFail(params.id)

    partner.delete()
  }
}

module.exports = PartnersContractController
