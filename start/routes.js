'use strict'
const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.group(() => {
  Route.resource('drivers', 'DriverController').apiOnly()
  Route.resource('enterprises', 'EnterpriseController').apiOnly()
  Route.resource('products', 'ProductController').apiOnly()
  Route.resource('sellers', 'SellerController').apiOnly()
  Route.resource('storages', 'StorageController').apiOnly()
  Route.resource('vehicules', 'VehiculeController').apiOnly()
  Route.resource('contracts', 'ContractController').apiOnly()
  Route.resource('partners', 'PartnersContractController').apiOnly()
  Route.resource('sells', 'SellController').apiOnly()
}).middleware('auth')
