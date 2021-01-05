import Sequelize, { Model } from 'sequelize';

class Movimentacoes extends Model {
  // Define as propriedados do modelo
  static init(conexao) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
        valor: {
          type: Sequelize.DECIMAL,
          allowNull: false,
          field: 'valor',
        },
        idCategoria: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Categorias',
            key: 'idCategoria',
          },
          field: 'idCategoria',
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'tipo',
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'descricao',
        },
        dataEntrada: {
          type: Sequelize.DATE,
          allowNull: true,
          field: 'dataEntrada',
        },
        dataSaida: {
          type: Sequelize.DATE,
          allowNull: true,
          field: 'dataSaida',
        },
        data: {
          type: Sequelize.DATE,
          allowNull: true,
          field: 'data',
        },
      },
      {
        sequelize: conexao,
      },
    );
    this.tableName = 'movimentacoes';

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Categorias, {
      foreignKey: 'idCategoria',
      as: 'Categorias',
    });
  }
}

export default Movimentacoes;
