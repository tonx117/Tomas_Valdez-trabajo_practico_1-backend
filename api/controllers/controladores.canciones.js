const canciones = require("../models/modelo.canciones");
const cancionesctrl = {};

cancionesctrl.index = async (_req, res) => {
  try {
    const Canciones = await canciones.findAll();
    if (!Canciones || Canciones.length === 0) {
      throw {
        status: 404,
        message: "no tienes canciones aun.",
      };
    }
    return res.json(Canciones);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Error interno del servidor",
    });
  }
};

cancionesctrl.show = async (req, res) => {
  const CancionesId = req.params.id;

  try {
    const Canciones = await canciones.findByPk(CancionesId);

    if (!Canciones) {
      throw {
        status: 404,
        message: "No existe la canciones con el id " + CancionesId,
      };
    }

    return res.json(Canciones);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

cancionesctrl.store = async (req, res) => {
  const { nombre_canciones, id_playlist } = req.body;

  try {
    const Canciones = await canciones.create({
      id_playlist,
      nombre_canciones,
    });

    if (!Canciones) {
      throw {
        status: 400,
        message: "No se pudo guardar la cancion.",
      };
    }

    return res.json(Canciones);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

cancionesctrl.destroy = async (req, res) => {
  const CancionesId = req.params.id;

  try {
    const cuenta = await canciones.findByPk(CancionesId);
    await canciones.destroy({
      where: {
        id: CancionesId,
      },
    });

    return res.json({ cuenta, message: "cancion eliminada correctamente." });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

module.exports = cancionesctrl;
