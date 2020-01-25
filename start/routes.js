'use strict'
const Route = use('Route')

Route.post("/register", "AuthController.register");
Route.post("/auth", "AuthController.authenticate");


Route.group(() => {
  Route.get('/users', "AuthController.show")
  Route.put("/logout", "AuthController.logout");
  Route.put("/change_password/:id", "AuthController.changePassword");
  Route.get('/get_user/:id', "AuthController.getUser");
  Route.delete('/delete_user/:id', 'AuthController.destroy')

  Route.resource('drivers', "DriverController").apiOnly()
  Route.resource('enterprises', 'EnterpriseController').apiOnly()
  Route.resource('products', 'ProductController').apiOnly()
  Route.resource('sellers', 'SellerController').apiOnly()
  Route.resource('storages', 'StorageController').apiOnly()
  Route.resource('vehicules', 'VehiculeController').apiOnly()
  Route.resource('contracts', 'ContractController').apiOnly()
  Route.resource('partners', 'PartnersContractController').apiOnly()
}).middleware("auth");
