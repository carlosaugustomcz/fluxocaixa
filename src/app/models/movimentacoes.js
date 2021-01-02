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
        idCategoria: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'idCategoria',
        },
        valor: {
          type: Sequelize.DECIMAL,
          allowNull: false,
          field: 'valor',
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
}

export default Movimentacoes;
