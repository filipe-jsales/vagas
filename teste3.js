/**
 * 
 * Para tornar o código mais performático, você pode usar o método findIndex para encontrar o índice do usuário a ser excluído. Em seguida, você pode usar o método splice para removê-lo diretamente do array data.

Aqui está o código atualizado:
 
Essa implementação utiliza o método findIndex para localizar o índice do usuário com o nome especificado. Se o índice for diferente de -1, o usuário é encontrado e removido usando o método splice. Caso contrário, é retornado um status 404 com a mensagem "Usuário não encontrado".
*/


const data = require("./fakeData");

module.exports = function(req, res) {
  const name = req.query.name;

  const index = data.findIndex((user) => user.name === name);
  if (index !== -1) {
    data.splice(index, 1);
    res.send("success");
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};
