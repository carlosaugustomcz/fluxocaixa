import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { secret } from '../hash/auth';

export default async (request, response, next) => {
  const authHeader = request.headers.authorization; // resgata o Token

  if (!authHeader) {
    return response.json({
      meta: 'Token não foi Informado',
    });
  }

  // Separa o Token em duas partes
  const parts = authHeader.split(' ');

  if (!parts === 2)
    return response.status(401).json({
      meta: 'Token não foi Informado',
    });

  const [scheme, token] = parts;

  if (!scheme == 'Bearer') {
  return response.status(401).json({
    meta: 'Token não foi Informado',
    });
  }

  try {
    const decodedToken = await promisify(jwt.verify)(token, secret);

    request.idCliente = decodedToken.id;
    request.mac = decodedToken.mac;

    next();
  } catch (error) {
    return response.status(401).json({
      meta: 'Token Expirado',
    });
  }
};
