/**
 * Para implementar permissões de usuário para as ações de deleção e atualização de usuários, podemos criar um sistema de controle de acesso baseado em papéis (Role-Based Access Control - RBAC). Vou fornecer uma implementação simplificada usando um middleware para validar as permissões.

Definindo as permissões:
 */
const permissions = {
  admin: ["delete", "update"],
  user: [],
};

//Criando o middleware de validação de permissões:
const checkPermission = (req, res, next) => {
  const userRole = req.user.role;
  const action = req.route.path.split("/")[1];

  if (permissions[userRole] && permissions[userRole].includes(action)) {
    next();
  } else {
    res.status(403).send("Acesso negado");
  }
};

//Aplicando o middleware nas rotas:
const deleteUser = (req, res) => {
  res.send("Usuário deletado com sucesso");
};

const updateUser = (req, res) => {
  res.send("Usuário atualizado com sucesso");
};

app.delete("/users", checkPermission, deleteUser); // Rota para deletar usuário, aplicando o middleware
app.put("/users", checkPermission, updateUser); // Rota para atualizar usuário, aplicando o middleware
