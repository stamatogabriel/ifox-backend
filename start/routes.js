'use strict'
const Route = use('Route')

Route.post("/register", "AuthController.register");
Route.post("/auth", "AuthController.authenticate");
Route.get('/users', "AuthController.show")

Route.group(() => {
  Route.put("/logout", "AuthController.logout");
  Route.put("/change_password", "AuthController.changePassword");
  Route.get('/get_user', "AuthController.getUser");
  Route.delete('/delete_user', 'AuthController.destroy')
}).middleware("auth");

Route.group(() => {
  Route.resource('drivers', "DriverController").apiOnly()
})

Route.group(() => {
  Route.resource('enterprises', 'EnterpriseController').apiOnly()
})

Route.group(() => {
  Route.resource('products', 'ProductController').apiOnly()
})

Route.group(() => {
  Route.resource('sellers', 'SellerController').apiOnly()
})

Route.group(() => {
  Route.resource('storages', 'StorageController').apiOnly()
})

Route.group(() => {
  Route.resource('carts', 'CartController').apiOnly()
})

Route.group(() => {
  Route.resource('vehicules', 'VehiculeController').apiOnly()
})
