import Sequelize, { Model } from 'sequelize';

class Categorias extends Model {
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
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'descricao',
        },
      },
      {
        sequelize: Connection,
      },
    );

    this.tableName = 'categorias';

    return this;
  }

  static associate(models) {
    this.hasMany(models.Movimentacoes, {
      foreignKey: 'idCategoria',
      as: 'Movimentacoes',
    });
  }
}

export default Categorias;
