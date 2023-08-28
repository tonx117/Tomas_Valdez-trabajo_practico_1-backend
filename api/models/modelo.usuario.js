const { DataTypes } = require("sequelize");
const { sequelize } = require("../../src/database/config");

// Modelo de Usuario
const usuario = sequelize.define(
  "Usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: {
        args: true,
        msg: "El email ya existe",
      },
    },
    contraseña: {
      type: DataTypes.STRING(100),
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
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "usuario",
  }
);
usuario.sync({ force: false }).then(() => {
  console.log("Tabla de Usuario creada");
});

module.exports = usuario;
