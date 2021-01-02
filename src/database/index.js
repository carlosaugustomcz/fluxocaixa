import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Categorias from '../app/models/categorias';
import Movimentacoes from '../app/models/movimentacoes';

const models = [Categorias, Movimentacoes];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.Connection = new Sequelize(databaseConfig.conexao);

    models
      .map(model => model.init(this.Connection))
      .map(model => {
        if (model.associate) {
          return model.associate(this.Connection);
        }
        return null;
      });
  }
}

export default new Database();
