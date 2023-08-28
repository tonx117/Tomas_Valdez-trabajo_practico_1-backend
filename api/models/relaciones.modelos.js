const canciones = require("./modelo.canciones.js");
const playlist = require("./modelo.playlist.js");
const usuario = require("./modelo.usuario.js");

usuario.hasMany(playlist, { foreignKey: "id_usuario" });
playlist.belongsTo(usuario, { foreignKey: "id_usuario" });

playlist.hasMany(canciones, { foreignKey: "id_playlist" });
canciones.belongsTo(playlist, { foreignKey: "id_playlist" });
