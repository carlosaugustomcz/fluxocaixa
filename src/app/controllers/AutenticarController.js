import Autenticacao from '../models/autenticacao';
import jwt from 'jsonwebtoken';
import { secret } from '../hash/auth';

class AutenticarController {
  async autenticar(request, response) {
    try {
      const retorno = await Autenticacao.findOne({
        where: {
          senha: request.query.senha,
        },
      });
      console.log(retorno);

      if (!retorno) {
        return response.status(401).json({
          meta: 'Autenticação falhou!',
        });
      }

      // caso o senha do usuario seja encontrada.... iremos criar um token:
      const token = jwt.sign({ senha: retorno.senha }, secret, {
        expiresIn: 86400, // o token irá expirar em 24 horas
      });

      // // Aqui iremos retornar a informação do token via JSON:
      return response.status(200).json({
        data: { token },
        meta: 'Token Criado!',
      });
    } catch (error) {
      return response.json({
        meta: error,
      });
    }
  }

  catch(error) {
    return response.json({
      meta: 'error',
    });
  }

  async listar(request, response) {
    try {
      const retorno = await Autenticacao.findOne({
        where: {
          senha: request.senha,
        },
        attributes: ['tempo', 'sincroniza'],
      });

      if (!retorno) {
        return response.json({
          meta: 'Autenticação Falhou!',
        });
      }

      return response.status(200).json({
        data: retorno,
        meta: 'sucess',
      });
    } catch (error) {
      return response.status(401).json({
        meta: 'Requisição não pôde ser processada pela API',
      });
    }
  }
}

export default new AutenticarController();
