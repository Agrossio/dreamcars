const Sequelize = require("sequelize");

// inicio y llamo a la base de datos
const db = new Sequelize("dreamcars", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
