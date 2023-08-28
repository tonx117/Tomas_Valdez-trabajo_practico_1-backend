const Playlist = require("../models/modelo.playlist");
const playlistctrl = {};

playlistctrl.index = async (_req, res) => {
  try {
    const playlist = await Playlist.findAll();
    if (!playlist || playlist.length === 0) {
      throw {
        status: 404,
        message: "No tienes una Playlist aún.",
      };
    }
    return res.json(playlist);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Error interno del servidor",
    });
  }
};

playlistctrl.show = async (req, res) => {
  try {
    const playlistId = req.params.id;
    const playlist = await Playlist.findByPk(playlistId, {
      include: [
        { model: User, attributes: ["id", "username", "email"] },
        { model: Song },
      ],
    });

    if (!playlist) {
      throw {
        status: 404,
        message: "No existe la Playlist con el id " + playlistId,
      };
    }

    return res.json(playlist);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

playlistctrl.store = async (req, res) => {
  const { nombre_playlist } = req.body;

  try {
    const playlist = await Playlist.create({
      nombre_playlist,
    });

    if (!playlist) {
      throw {
        status: 400,
        message: "No se pudo crear la Playlist.",
      };
    }

    return res.json(playlist);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

playlistctrl.update = async (req, res) => {
  const playlistId = req.params.id;
  const { nombre_Playlist } = req.body;
  try {
    const playlist = await Playlist.findByPk(playlistId);
    await playlist.update({
      nombre_Playlist,
    });
    return res.json(playlist);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

playlistctrl.destroy = async (req, res) => {
  const playlistId = req.params.id;

  try {
    const nombreplaylist = await Playlist.findByPk(playlistId);
    await Playlist.destroy({
      where: {
        id: playlistId,
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
