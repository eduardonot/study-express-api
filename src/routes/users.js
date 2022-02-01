const mandatoryFields = require('./../middlewares/checkUserMandatoryFields')
const userController = require('../controller/user-controller')

module.exports = app => {
  app.get('/users', mandatoryFields.checkFields, userController.find)
  app.post('/users', mandatoryFields.checkFields, userController.create)
}
