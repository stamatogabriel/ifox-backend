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
  Route.resource('drivers', "DriverController")
})

Route.group(() => {
  Route.resource('enterprises', 'EnterpriseController')
})

Route.group(() => {
  Route.resource('products', 'ProductController')
})

Route.group(() => {
  Route.resource('sellers', 'SellerController')
})
