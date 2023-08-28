const { DataTypes } = require("sequelize");
const { sequelize } = require("../../src/database/config");
const Canciones = require("./modelo.canciones");

// Modelo de playlist
const playlist = sequelize.define(
  "Playlist",
  {
    id_playlist: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_canciones: {
      foreignKey: true,
      type: DataTypes.INTEGER,
      model: "Canciones",
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      model: "Usuario",
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

playlist.hasMany(Canciones, { foreignKey: "Playlistid" });

playlist.sync({ force: true }).then(() => {
  console.log("Tabla de Playlist creada");
});

module.exports = playlist;
