/**
 * A partir do código fornecido, podemos inferir que a intenção é criar um novo usuário na lista de usuários representada pela variável data. No entanto, há um pequeno erro de digitação que precisa ser corrigido. A variável jov foi declarada em vez de job. Para corrigir esse problema, basta substituir todas as ocorrências de jov por job. Além disso, é recomendável adicionar verificações para garantir que os campos name e job sejam fornecidos antes de adicionar o novo usuário à lista. Aqui está o código corrigido:
 */

var data = require("./fakeData");

module.exports = function(req, res) {
  var name = req.body.name;
  var job = req.body.job;

  if (!name || !job) {
    res.status(400).send("Nome e profissão devem ser fornecidos");
    return;
  }

  var newUser = {
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
};
