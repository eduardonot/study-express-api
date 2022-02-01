// REPOSITÓRIO FAZ A QUERY AO MODEL

const Users = require('../model/users')

module.exports = {
  add (user) {
    return Users.create(user)
  },
  findOne (user) {
    return Users.findOne({ name: user.name })
  },
  find (user) {
    return Users.find({ name: { $regex: user.name, $options: 'i' } })
  }
}
