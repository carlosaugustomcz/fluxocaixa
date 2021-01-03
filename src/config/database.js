module.exports = {
  conexao: {
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'fluxocaixa',
    dialect: 'mysql',
    operatorsAlias: false,
    loggin: false,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    dialectOptions: { decimalNumbers: true },
  },
};
