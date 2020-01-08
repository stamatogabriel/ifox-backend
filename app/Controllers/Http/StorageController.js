'use strict'

const Storage = use('App/Models/Storage')
class StorageController {

  async index({ request, response, view }) {
    const storages = await Storage.all()

    return storages
  }


  async store({ request, response }) {
    const data = request.all()

    const storage = await Storage.create(data)

    return storage
  }

  async show({ params, request, response, view }) {
    const storage = await Storage.findOrFail(params.id)

    return storage
  }


  async update({ params, request, response }) {
    const { name, street, number, neighborhood, city, uf, zipcode, contact, phone } = request.all()

    const storage = await Storage.findOrFail(params.id)

    !name ? null : storage.name = name
    !street ? null : storage.street = street
    !number ? null : storage.number = number
    !neighborhood ? null : storage.neighborhood = neighborhood
    !city ? null : storage.city = city
    !uf ? null : storage.uf = uf
    !zipcode ? null : storage.zipcode = zipcode
    !contact ? null : storage.contact = contact
    !phone ? null : storage.phone = phone

    storage.save()

    return storage
  }

  async destroy({ params, request, response }) {
    const storage = await Storage.findOrFail(params.id)

    storage.delete()
  }
}

module.exports = StorageController
