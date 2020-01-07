'use strict'
const Driver = use('App/Models/Driver')

class DriverController {

  async index({ request, response, view }) {
    const drivers = await Driver.all()

    return drivers
  }

  async store({ request, response }) {
    const data = request.all()

    const driver = await Driver.create(data)

    return driver
  }


  async show({ params, request, response, view }) {
    const driver = await Driver.findOrFail(params.id)

    return driver
  }

  async update({ params, request, response }) {
    const { name, cpf, rg, cnh, cnh_category, phone } = request.all()

    const driver = await Driver.findOrFail(params.id)

    !name ? null : driver.name = name
    !cpf ? null : driver.cpf = cpf
    !rg ? null : driver.rg = rg
    !cnh ? null : driver.cnh = cnh
    !cnh_category ? null : driver.cnh_category = cnh_category
    !phone ? null : driver.phone = phone

    driver.save()

    return driver

  }

  async destroy({ params, request, response }) {
    const driver = await Driver.findOrFail(params.id)

    driver.delete()
  }
}

module.exports = DriverController
