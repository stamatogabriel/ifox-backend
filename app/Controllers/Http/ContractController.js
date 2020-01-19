'use strict'
const Contract = use('App/Models/Contract')

class ContractController {

  async index({ request, response, view }) {
    const contracts = await Contract.all()

    return contracts
  }

  async store({ request, response }) {
    const data = request.only([
      'storage_id',
      'contract_number',
      'distributor_id',
      'volume',
      'unitary_price',
      'to_pay'
    ])

    const contract = await Contract.create(data)

    return contract
  }

  async show({ params, request, response, view }) {
    const contract = await Contract.findOrFail(params.id)

    return contract
  }

  async update({ params, request, response }) {
    const contract = await Contract.findOrFail(params.id)

    const data = request.only([
      'storage_id',
      'contract_number',
      'distributor_id',
      'volume',
      'unitary_price',
      'to_pay'
    ])

    contract.merge(data)

    contract.save()

    return contract
  }

  async destroy({ params, request, response }) {
    const contract = await Contract.findOrFail(params.id)

    contract.delete()
  }
}

module.exports = ContractController
