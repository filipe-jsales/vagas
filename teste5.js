/**
 * Para retornar quantas vezes um determinado usuário foi lido no teste1, precisamos modificar o código para buscar o usuário no array data e contar quantas vezes o usuário aparece.

Nessa versão atualizada, utilizamos o método filter para filtrar todos os usuários que têm o mesmo nome especificado. Em seguida, pegamos o comprimento do array resultante para obter a contagem de ocorrências. Essa contagem é então enviada como resposta em uma string formatada.

Aqui está o código atualizado:
 */

const data = require("./fakeData");

module.exports = function(req, res) {
  const name = req.query.name;
  const count = data.filter((user) => user.name === name).length;
  res.send(`Usuário ${name} foi lido ${count} vezes.`);
};
