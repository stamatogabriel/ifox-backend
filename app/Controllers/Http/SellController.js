'use strict'
const Sell = use('App/Models/Sell')
const Contract = use('App/Models/Contract')
const Database = use('Database')

class SellController {
  async index ({ params }) {
    const sells = await Sell
      .query()
      .where('contract_id', params.contracts_id)
      .fetch()

    return sells
  }

  async store ({ params, request, response }) {
    const data = request.all()
    const contract = await Contract.findOrFail(data.contract_id)

    if (contract.to_load < data.volume) {
      return response.status(401).send({
        error: {
          message: 'Volume da venda maior que o disponível em contrato. Entre em contato com o administrador para saber mais'
        }
      })
    }

    await Database.table('contracts')
      .where('id', data.contract_id)
      .update('to_load', contract.to_load - data.volume)

    const sell = await Sell.create({
      ...data,
      contract_id: params.contracts_id,
      profit: data.sell_price - contract.total_cust
    })

    return sell
  }

  async show ({ params, request, response, view }) {
    const sell = await Sell.findOrFail(params.id)

    return sell
  }

  async update ({ params, request }) {
    const data = request.all()

    const sell = await Sell.findOrFail(params.id)

    sell.merge(data)

    sell.save()

    return sell
  }

  async destroy ({ params }) {
    const sell = await Sell.findOrFail(params.id)

    const contract = await Contract.findOrFail(sell.contract_id)

    await Database.table('contracts')
      .where('id', sell.contract_id)
      .update('to_load', parseInt(contract.to_load) + parseInt(sell.volume))

    sell.delete()
  }
}

module.exports = SellController
