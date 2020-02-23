"use strict";
const Sell = use("App/Models/Sell");
const Contract = use("App/Models/Contract");
const Database = use("Database");

class SellController {
  async index({ request, response, view }) {
    const sells = await Sell.all();

    return sells;
  }

  async store({ request, response }) {
    const data = request.all();
    const contract = await Contract.findOrFail(data.contract_id);

    await Database.table("contracts")
      .where("id", data.contract_id)
      .update("to_load", contract.to_load - data.volume);

    const sell = await Sell.create({
      ...data,
      profit: data.sell_price - contract.total_cust
    });

    return sell;
  }

  async show({ params, request, response, view }) {
    const sell = await Sell.findOrFail(params.id);

    return sell;
  }

  async update({ params, request, response }) {
    const data = request.only(["sell_price"]);

    const sell = await Sell.findOrFail(params.id);

    sell.merge(data);

    sell.save();

    return sell;
  }

  async destroy({ params, request, response }) {
    const sell = await Sell.findOrFail(params.id);

    const contract = await Contract.findOrFail(sell.contract_id);

    await Database.table("contracts")
      .where("id", sell.contract_id)
      .update("to_load", contract.to_load + sell.volume);

    console.log(contract.to_load + sell.volume)

    sell.delete();
  }
}

module.exports = SellController;
