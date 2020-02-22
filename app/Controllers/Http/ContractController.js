'use strict'
const Contract = use('App/Models/Contract')

class ContractController {

  async index({ request, response, view }) {
    const contracts = await Contract
      .query()
      .with('storages')
      .with('enterprises')
      .fetch()

    return contracts
  }

  async store({ request, response }) {
    const data = request.only([
      'storage_id',
      'contract_number',
      'enterprise_id',
      'product_id',
      'volume',
      'unitary_price',
      'spread',
      'brokerage',
      'storage_cust',
      'freight',
      'notes',
      'owner'
    ])


    const contract = await Contract.create({
      ...data,
      to_pay: parseFloat(data.volume) * parseFloat(data.unitary_price),
      to_load: data.volume,
      paied: 0,
      total_cust:  parseFloat(data.unitary_price) +  parseFloat(data.spread) +  parseFloat(data.brokerage) +  parseFloat(data.storage_cust),
      total: parseFloat(data.volume) * parseFloat(data.unitary_price),
      open: true
    })

    return contract
  }

  async show({ params, request, response, view }) {
    const contract = await Contract.findOrFail(params.id)

    await contract
      .loadMany(['storages', 'enterprises', 'products'])

    return contract
  }

  async update({ params, request, response }) {
    const contract = await Contract.findOrFail(params.id)

    const data = request.only([
      'storage_id',
      'contract_number',
      'enterprise_id',
      'product_id',
      'volume',
      'unitary_price',
      'spread',
      'brokerage',
      'storage_cust',
      'freight',
      'notes',
      'owner'
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
