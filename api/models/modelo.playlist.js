const { DataTypes } = require("sequelize");
const { sequelize } = require("../../src/database/config");
const usuario = require("./modelo.usuario.js");

// Modelo de playlist
const playlist = sequelize.define(
  "Playlist",
  {
    id_playlist: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: { model: usuario, key: "id_usuario" },
    },
    nombre_playlist: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cantidad_canciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    tableName: "Playlist",
  }
);

playlist.sync({ force: false }).then(() => {
  console.log("Tabla de Playlist creada");
});

module.exports = playlist;
