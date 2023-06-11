/**
 * 
 * Aqui estão algumas melhorias que podem ser feitas para deixar o código mais legível e eficiente:

Utilizar a função find em vez de um loop for para buscar o usuário pelo nome. Isso simplifica o código e melhora a legibilidade.

Utilizar a desestruturação para extrair o objeto req diretamente nos parâmetros da função, em vez de acessá-lo por meio do objeto req.

Evitar enviar a resposta dentro de um loop. Após encontrar o usuário desejado, podemos simplesmente retornar o resultado e encerrar a função.

Mover a importação do arquivo fakeData para dentro das funções. Dessa forma, o arquivo só será carregado quando necessário.} req 

 */

const getUser = (req, res) => {
  const name = req.query.name;
  const data = require("./fakeData");

  const user = data.find((user) => user.name === name);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};

const getUsers = (res) => {
  const data = require("./fakeData");
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
