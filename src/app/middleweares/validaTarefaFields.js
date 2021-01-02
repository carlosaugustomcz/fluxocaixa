import tarefaValidador from '../validators/tarefaFields';

export default async (request, response, next) => {
  const tarefa = request.body;

  const isValid = await tarefaValidador(tarefa);

  if (!isValid) {
    return response.status(400).json({
      meta: 'Campos Inválidos!',
    });
  }

  next();
};
