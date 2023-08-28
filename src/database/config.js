const { Sequelize, model, DataTypes } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("conexion realizada correctamente.");
  })
  .catch((err) => {
    console.log("no fue posible conectar a la base de datos:", err);
  });

module.exports = {
  sequelize,
  DataTypes,
  model,
};
