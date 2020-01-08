'use strict'
const Vehicule = use('App/Models/Vehicule')

class VehiculeController {
  async index({ request, response, view }) {
    const vehicules = await Vehicule.all()

    return vehicules
  }

  async store({ request, response }) {
    const data = request.all()
    const vehicule = await Vehicule.create(data)

    return vehicule
  }

  async show({ params, request, response, view }) {
    const vehicule = await Vehicule.findOrFail(params.id)

    await vehicule.load('carts')

    return vehicule
  }

  async update({ params, request, response }) {
    const { license, truck_type, max_volume, attachment, second_attachment } = request.all()
    const vehicule = await Vehicule.findOrFail(params.id)

    !license ? null : vehicule.license = license
    !truck_type ? null : vehicule.truck_type = truck_type
    !max_volume ? null : vehicule.max_volume = max_volume
    !attachment ? null : vehicule.attachment = attachment
    !second_attachment ? null : vehicule.second_attachment = second_attachment

    vehicule.save()

    return vehicule
  }

  async destroy({ params, request, response }) {
    const vehicule = await Vehicule.findOrFail(params.id)

    vehicule.delete()
  }
}

module.exports = VehiculeController
