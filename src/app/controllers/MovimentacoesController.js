import Sequelize from 'sequelize';
import Movimentacoes from '../models/movimentacoes';

class MovimentacoesController {
  async listar(request, response) {
    const { data } = request.query;

    try {
      const retorno = await Movimentacoes.sequelize.query(
        //        `SELECT

        //       FROM
        //        tarefas t
        //        INNER JOIN usuarios u ON t.responsavel = u.idUsuario
        //       WHERE descricao like '%${pesquisa}%'
        //        AND status = '${status}'
        //        ORDER BY ${order} ${classificacao}`,
        {
          type: Sequelize.QueryTypes.SELECT,
        },
      );

      if (!retorno.length) {
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
        meta: 'Error',
      });
    }
  }
}
export default new MovimentacoesController();
