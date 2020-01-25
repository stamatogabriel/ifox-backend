'use strict'
const Route = use('Route')

Route.post("/register", "AuthController.register");
Route.post("/auth", "AuthController.authenticate");
Route.get('/users', "AuthController.show")

Route.group(() => {
  Route.put("/logout", "AuthController.logout");
  Route.put("/change_password/:id", "AuthController.changePassword");
  Route.get('/get_user/:id', "AuthController.getUser");
  Route.delete('/delete_user/:id', 'AuthController.destroy')
}).middleware("auth");

Route.group(() => {
  Route.resource('drivers', "DriverController").apiOnly()
}).middleware("auth");

Route.group(() => {
  Route.resource('enterprises', 'EnterpriseController').apiOnly()
}).middleware("auth");

Route.group(() => {
  Route.resource('products', 'ProductController').apiOnly()
}).middleware("auth");

Route.group(() => {
  Route.resource('sellers', 'SellerController').apiOnly()
}).middleware("auth");

Route.group(() => {
  Route.resource('storages', 'StorageController').apiOnly()
}).middleware("auth");

Route.group(() => {
  Route.resource('vehicules', 'VehiculeController').apiOnly()
}).middleware("auth");

Route.group(() => {
  Route.resource('contracts', 'ContractController').apiOnly()
})
