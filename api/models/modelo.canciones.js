const { DataTypes } = require("sequelize");
const { sequelize } = require("../../src/database/config");
const playlist = require("./modelo.playlist");
// Modelo de canciones
const canciones = sequelize.define(
  "Canciones",
  {
    id_canciones: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_playlist: {
      type: DataTypes.INTEGER,
    },
    nombre_cancion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    createdAt: true,
    tableName: "Canciones",
  }
);

canciones.sync({ force: true }).then(() => {
  console.log("Tabla de Canciones creada");
});

module.exports = canciones;
