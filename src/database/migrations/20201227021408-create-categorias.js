module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('categorias', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categorias');
  },
};
