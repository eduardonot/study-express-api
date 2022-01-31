const express = require('express')
const config = require('./../config')
const db = require('./mongodb')
const app = express()
const rootRoute = require('./../routes/root')
const usersRoute = require('./../routes/users')

module.exports = {
  start () {
    app.use(express.json())
    db.connect()
    app.listen(config.port, () => {
      console.log(`App: localhost:${config.port}`)
    })

    rootRoute(app)
    usersRoute(app)
  }
}
