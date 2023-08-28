const playlist = require("../models/modelo.playlist");
const playlistctrl = {};

playlistctrl.index = async (_req, res) => {
  try {
    const Playlist = await playlist.findAll();
    if (!Playlist || Playlist.length === 0) {
      throw {
        status: 404,
        message: "No tienes una Playlist aún.",
      };
    }
    return res.json(Playlist);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Error interno del servidor",
    });
  }
};
// Obtener una reserva
playlistctrl.show = async (req, res) => {
  const PlaylistId = req.params.id;

  try {
    const Playlist = await playlist.findByPk(PlaylistId);

    if (!Playlist) {
      throw {
        status: 404,
        message: "No existe la Playlist con el id " + PlaylistId,
      };
    }

    return res.json(Playlist);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

playlistctrl.store = async (req, res) => {
  const { nombre_Playlist } = req.body;

  try {
    const Playlist = await playlist.create({
      nombre_Playlist,
    });

    if (!Playlist) {
      throw {
        status: 400,
        message: "No se pudo crear la Playlist.",
      };
    }

    return res.json(Playlist);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

playlistctrl.update = async (req, res) => {
  const PlaylistId = req.params.id;
  const { nombre_Playlist } = req.body;
  try {
    const Playlist = await playlist.findByPk(PlaylistId);
    await Playlist.update({
      nombre_Playlist,
    });
    return res.json(Playlist);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

playlistctrl.destroy = async (req, res) => {
  const PlaylistId = req.params.id;

  try {
    const nombreplaylist = await playlist.findByPk(PlaylistId);
    await playlist.destroy({
      where: {
        id: PlaylistId,
      },
    });

    return res.json({
      nombreplaylist,
      message: "Playlist eliminada correctamente.",
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

module.exports = playlistctrl;
