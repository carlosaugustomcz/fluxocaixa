import Usuarios from '../models/usuarios';

export default async (request, response, next) => {
  const { idUsuario } = request.query;

  const retorno = await Usuarios.findByPk(idUsuario);

  if (!retorno) {
    return response.status(400).json({
      meta: 'Usuário não existe ou sem Permissão!',
    });
  }

  const str = retorno.tipo;
  const tipo = str.toUpperCase();

  if (tipo == 'AGENTE') {
    return response.status(200).json({
      meta: 'Usuário não tem permissão!',
    });
  }
  next();
};
