module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('movimentacoes', {
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
        references: {
          model: 'categorias',
          key: 'id',
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT',
        },
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movimentacoes');
  },
};
