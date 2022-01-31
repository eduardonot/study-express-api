module.exports = app => {
  app.get('/', function (req, res) {
    console.log('Someone accessed Root Route')
    res.send(req.headers)
  })
}
