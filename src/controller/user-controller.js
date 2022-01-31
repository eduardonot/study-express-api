// CONTROLLER FAZ REQUERIMENTO AO REPOSITÓRIO
// APÓS, LIDA COM A RESPOSTA

const Users = require('../repository/user-repository')
module.exports = {
  create (req, res) {
    // FAZ A PESQUISA
    Users.search(req.body)
      // CASO ENCONTRE UMA RESPOSTA
      .then(data => {
        if (data) {
          return res.status(400).send('Usuario já cadastrado!')
        }

        // CASO NÃO, ADICIONA USUÁRIO
        Users.add(req.body)
          .then(data => res.status(201).send('Usuário cadastrado! '))
          .catch(err => res.status(400).send(err))
      })
      .catch(err => res.status(400).send(err))
  }
}
