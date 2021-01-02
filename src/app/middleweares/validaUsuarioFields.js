import usuarioValidador from '../validators/usuarioFields';

export default async (request, response, next) => {
  const usuario = request.body;

  const isValid = await usuarioValidador(usuario);

  if (!isValid) {
    return response.status(400).json({
      meta: 'Usuário Inválido!',
    });
  }

  next();
};
