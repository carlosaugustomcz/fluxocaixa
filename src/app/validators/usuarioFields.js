import * as yup from 'yup';

const usuarioValidador = async (usuario) => {
  const schema = yup.object({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    tipo: yup.string().required(),
  });

  const isValid = await schema.isValid(usuario);

  return isValid;
};

export default usuarioValidador;
