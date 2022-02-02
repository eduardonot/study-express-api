// CONTROLLER FAZ REQUERIMENTO AO REPOSITÓRIO
// APÓS, LIDA COM A RESPOSTA E RETORNA AO USUÁRIO

const Users = require('../repository/user-repository')
const UserService = require('./../services/UserService')
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
  async find (req, res) {
    // ENVIANDO AO SERVICE
    const response = await UserService.find(req.body)
    response.length === 0 ? res.status(400).send('Não Encontrado!') : res.status(200).json(response)

    // APENAS O CONTROLLER
    // Users.find(req.body)
    //   .then(data => {
    //     if (data) {
    //       return res.json(data)
    //     }
    //     return res.status(400).send('Usuário não encontrado')
    //   })
    //   .catch((err) => res.status(400).send(err))
  }
}
