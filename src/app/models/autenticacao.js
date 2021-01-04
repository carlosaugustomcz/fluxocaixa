import Sequelize, { Model } from 'sequelize';

class Autenticacao extends Model {
  // Define as propriedados do modelo
  static init(Connection) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'senha',
        },
      },
      {
        sequelize: Connection,
      },
    );

    this.tableName = 'autenticacao';

    return this;
  }
}

export default Autenticacao;
