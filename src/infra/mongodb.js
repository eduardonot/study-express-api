const mongoose = require('mongoose')
const config = require('./../config')
const db = mongoose.connection

module.exports = {
  connect () {
    mongoose.connect(config.db.mongoUrl)
    db.on('error', err => console.log(err))
    db.once('open', () => console.log('DB Connected'))
  }
}
