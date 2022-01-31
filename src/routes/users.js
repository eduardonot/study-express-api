const mandatoryFields = require('./../middlewares/checkUserMandatoryFields')
const userController = require('../controller/user-controller')

module.exports = app => {
  app.get('/users', function (req, res) {
    res.send('Not Build Yet')
  })
  app.post('/users', mandatoryFields.checkFields, userController.create, function (req, res) {
    res.send('Teste')
  })
}
