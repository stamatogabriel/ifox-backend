'use strict'
const Sell = use('App/Models/Sell')

class SellListController {
  async index () {
    const sells = await Sell.all()

    return sells
  }
}

module.exports = SellListController
