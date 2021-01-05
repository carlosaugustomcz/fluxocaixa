import Categorias from '../models/categorias';

class CategoriasController {
  async inserir(request, response) {
    try {
      await Categorias.create({
        ...request.body,
      });
      return response.status(200).json({ meta: 'sucess' });
    } catch (error) {
      return response.status(400).json({ meta: 'Erro na Inclusão!' });
    }
  }

  async alterar(request, response) {
    try {
      const categoria = await Categorias.findByPk(request.body.id);
      categoria.descricao = request.body.descricao;

      await Categorias.save(categoria);
      return response.status(200).json({ meta: 'sucess' });
    } catch (error) {
      return response
        .status(400)
        .json({ meta: 'Erro na Alteração!' });
    }
  }

  async listar(request, response) {
    try {
      const retorno = await Categorias.findAll();

      if (!retorno) {
        return response
          .status(200)
          .json({ meta: 'Nenhum registro encontrado' });
      }

      return response.status(200).json({
        data: retorno,
        meta: 'sucess',
      });
    } catch (error) {
      return response.status(400).json({
        meta: error,
      });
    }
  }

  async deletar(request, response) {
    const categoria = request.body.id;

    try {
      await Categorias.destroy({
        where: {
          id: categoria,
        },
      });

      return response.status(200).json({
        meta: 'sucess',
      });
    } catch (error) {
      return response.status(400).json({
        meta: error,
      });
    }
  }
}
export default new CategoriasController();
