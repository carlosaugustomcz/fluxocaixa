import { Router } from 'express';

import CategoriasController from './app/controllers/CategoriasController';
import MovimentacoesController from './app/controllers/MovimentacoesController';

const routes = new Router();

// Categorias
routes.get('/categorias/listar', CategoriasController.listar);

routes.post('/categorias/inserir', CategoriasController.inserir);

routes.put('/categorias/alterar', CategoriasController.alterar);

routes.delete('/categorias/deletar', CategoriasController.deletar);

// Movimentacoes
routes.get('/movimentacoes/listar', MovimentacoesController.listar);

export default routes;
