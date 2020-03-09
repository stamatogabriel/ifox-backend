'use strict'
const Sell = use('App/Models/Sell')

class SellListController {
  async index () {
    const sells = await Sell.all()

    return sells
  }

  async store ({ request }) {
    const data = request.all()

    const sell = await Sell.create(data)

    return sell
  }

  async show ({ params }) {
    const sell = await Sell.findOrFail(params.id)

    return sell
  }

  async update () {

  }

  async destroy ({ params }) {
    const sell = await Sell.findOrFail(params.id)

    sell.delete()
  }
}

module.exports = SellListController
