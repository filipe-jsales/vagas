/**
 * O código fornecido para atualizar os dados de um usuário específico tem um problema de lógica. No momento, ele está usando a mesma variável id como argumento de comparação tanto para encontrar o usuário no array data quanto para a função de callback do método find. Isso fará com que o próprio valor id seja comparado com ele mesmo, resultando em um resultado verdadeiro e retornando o primeiro elemento do array data.

Nessa versão corrigida, o método find é usado para encontrar o usuário correto com base no valor do id. Se o usuário for encontrado, seus dados são atualizados com os valores fornecidos em req.body.name e req.body.job, e o usuário atualizado é enviado como resposta. Caso contrário, é retornado um status 404 com a mensagem "Usuário não encontrado".

Aqui está o código corrigido:
 */

const data = require("./fakeData");

module.exports = function(req, res) {
  const id = req.query.id;
  const user = data.find((user) => user.id === id);

  if (user) {
    user.name = req.body.name;
    user.job = req.body.job;
    res.send(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};
