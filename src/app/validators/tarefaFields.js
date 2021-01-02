import * as yup from 'yup';

const tarefaValidador = async (tarefa) => {
  const schema = yup.object({
    responsavel: yup.number().required().integer(),
    descricao: yup.string().required(),
    status: yup.string().required(),
  });

  const isValid = await schema.isValid(tarefa);

  return isValid;
};

export default tarefaValidador;
