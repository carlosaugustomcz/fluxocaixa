import { Router } from 'express';
import TokenMiddlewares from './app/middleweares/token';

import CategoriasController from './app/controllers/CategoriasController';
import MovimentacoesController from './app/controllers/MovimentacoesController';
import AutenticarController from './app/controllers/AutenticarController';

const routes = new Router();

// Categorias
routes.get('/categorias/listar', CategoriasController.listar);

routes.post('/categorias/inserir', CategoriasController.inserir);

routes.put('/categorias/alterar', CategoriasController.alterar);

routes.delete('/categorias/deletar', CategoriasController.deletar);

// Movimentacoes
routes.post(
  '/movimentacoes/inserir',
  TokenMiddlewares,
  MovimentacoesController.inserir,
);

routes.get('/movimentacoes/listar', MovimentacoesController.listar);

routes.delete(
  '/movimentacoes/deletar',
  MovimentacoesController.deletar,
);

// Autenticacao
routes.get('fluxocaixa/autenticar', AutenticarController.autenticar);

export default routes;
