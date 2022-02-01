// CONTROLLER FAZ REQUERIMENTO AO REPOSITÓRIO
// APÓS, LIDA COM A RESPOSTA E RETORNA AO USUÁRIO

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
  find (req, res) {
    Users.find(req.body)
      .then(data => {
        if (data) {
          return res.json(data)
        }
        return res.status(400).send('Usuário não encontrado')
      })
      .catch((err) => res.status(400).send(err))
  }
}
