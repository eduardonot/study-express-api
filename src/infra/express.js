const express = require('express')
const config = require('./../config')
const db = require('./mongodb')
const app = express()
const rootRoute = require('./../routes/root')
const usersRoute = require('./../routes/users')

module.exports = {
  start () {
    db.connect()
    app.use(express.json())
    app.listen(config.port, () => {
      console.log(`App: http://localhost:${config.port}`)
    })

    rootRoute(app)
    usersRoute(app)
  }
}
