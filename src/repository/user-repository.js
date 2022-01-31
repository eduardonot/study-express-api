// REPOSITÓRIO FAZ A QUERY AO MODEL

const Users = require('../model/users')

module.exports = {
  add (user) {
    return Users.create(user)
  },
  search (user) {
    return Users.findOne({ name: user.name })
  }
}
