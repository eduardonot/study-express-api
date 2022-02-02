const Users = require('../repository/user-repository')
module.exports = {
  create (req, res) {
    // FAZ A PESQUISA
    Users.findOne(req.body)
      // CASO ENCONTRE UMA RESPOSTA, DIZ QUE EXISTE CADASTRO
      .then(data => {
        if (data) {
          return res.status(400).send('Usuario já cadastrado!')
        }

        // CASO NÃO, ADICIONA USUÁRIO
        Users.add(req.body)
          .then(data => {
            console.log(data)
            res.status(201).send('Usuário cadastrado! ')
          })
          .catch(err => res.status(400).send(err))
      })
      .catch(err => res.status(400).send(err))
  },
  async find (body) {
    const getUser = await Users.find(body)
    return getUser
  }
}
