module.exports = {
  checkFields (req, res, next) {
    if (!req.body.name) {
      return res.status(400).send('Insira em "name"')
    }
    next()
  }
}
