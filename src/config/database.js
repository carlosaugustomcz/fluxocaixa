module.exports = {
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'fluxocaixa',
  dialect: 'mysql',
  operatorsAlias: false,
  loggin: false,
  define: {
    timestamps: false,
    freezeTableName: true,
  },
  dialectOptions: { decimalNumbers: true },
};
