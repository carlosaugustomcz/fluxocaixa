import Sequelize from 'sequelize';
import Movimentacoes from '../models/movimentacoes';

class MovimentacoesController {
  async inserir(request, response) {
    try {
      await Movimentacoes.create({
        ...request.body,
      });
      return response.status(200).json({ meta: 'sucess' });
    } catch (error) {
      return response.status(400).json({ meta: 'Erro na Inclusão!' });
    }
  }

  async listar(request, response) {
    try {
      const Total = await Movimentacoes.sequelize.query(
        `select sum(valor) as saldoTotal
        from movimentacoes
        where data = '${request.query.dataInicio}'`,
        {
          type: Sequelize.QueryTypes.SELECT,
        },
      );

      const retorno = await Movimentacoes.sequelize.query(
        `SELECT m.id, m.valor, m.descricao as descricao, data,
        CASE WHEN m.tipo = 'E' THEN 'Entrada' WHEN m.tipo = 'S' THEN 'Saída' END AS tipo,
        m.idcategoria, c.descricao as name
        FROM movimentacoes m
        INNER JOIN categorias c ON m.idcategoria=c.id
        where m.data = '${request.query.dataInicio}'`,
        {
          type: Sequelize.QueryTypes.SELECT,
        },
      );

      if (!retorno) {
        return response.json({
          meta: 'nenhum registro encontrado!',
        });
      }

      return response.status(200).json({
        Total,
        movimentacoes: retorno,
      });
    } catch (error) {
      return response.status(400).json({
        meta: error,
      });
    }
  }

  async deletar(request, response) {
    const id = request.body.id;

    try {
      await Movimentacoes.destroy({
        where: {
          id,
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
export default new MovimentacoesController();
