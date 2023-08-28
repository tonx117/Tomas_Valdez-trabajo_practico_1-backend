const cancionesctrl = require("../controllers/controladores.canciones");

const router = require("express").Router();

router.get("/canciones", cancionesctrl.index);

router.post("/canciones", cancionesctrl.store);

router.get("/canciones/:id", cancionesctrl.show);

router.delete("/canciones/:id", cancionesctrl.destroy);

module.exports = router;
