import { Router } from 'express';
import { autenticar } from '../Seguranca/Autenticacao.js';

// Estrutura a rota para login
const rotaLogin = new Router();

// Define os metodos para a rota login
rotaLogin.post('/', (req, resp) => {
  autenticar(req, resp);
});

export default rotaLogin;
// *********************BACKUP MAIS NOVO************************
// import Router from 'express';
// import AgenciaCtrl from '../Controle/AgenciaCtrl.js';

// // Estrutura a rota para agencia e recupera funções da AgenciaCtrl
// const rotaAgencia = new Router();
// const agenciaCtrl = new AgenciaCtrl();

// // Define os metodos para a rota agencia
// rotaAgencia
//   .post('/', agenciaCtrl.cadastrar)
//   .post('/:termo', agenciaCtrl.cadastrarProduto)
//   .get('/', agenciaCtrl.consultar)
//   .get('/:termo', agenciaCtrl.consultar)
//   .put('/', agenciaCtrl.alterar)
//   .put('/:termo', agenciaCtrl.alterarProduto)
//   .delete('/', agenciaCtrl.excluir)
//   .delete('/:termo', agenciaCtrl.excluirProduto);

// export default rotaAgencia;
// +++++++++++++++++++++++++++ BACKUP +++++++++++++++++++++++++++

// import Router from 'express';
// import AgenciaCtrl from '../Controle/AgenciaCtrl.js';

// // Estrutura a rota para agencia e recupera funções da AgenciaCtrl
// const rotaAgencia = new Router();
// const agenciaCtrl = new AgenciaCtrl();

// // Define os metodos para a rota agencia
// rotaAgencia
// .post('/', agenciaCtrl.cadastrar)
// .get('/', agenciaCtrl.consultar)
// .put('/', agenciaCtrl.alterar)
// .delete('/', agenciaCtrl.excluir);

// export default rotaAgencia;
