'use strict'
const Database = use('Database')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const user = await Database.table('users')
      .where('email', email)[0]

    user.password = undefined

    const token = await auth.attempt(email, password)

    return { token, user }
  }
}

module.exports = SessionController
