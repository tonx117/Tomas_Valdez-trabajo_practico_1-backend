const playlistctrl = require("../controllers/controladores.playlist");

const router = require("express").Router();

router.get("/playlist", playlistctrl.index);

router.post("/playlist", playlistctrl.store);

router.get("/playlist/:id", playlistctrl.show);

router.put("/playlist/:id", playlistctrl.update);

router.delete("/playlist/:id", playlistctrl.destroy);

module.exports = router;
