const playlistctrl = require("../controllers/controladores.playlist");

const router = require("express").Router();

router.get("/", playlistctrl.index);

router.post("/", playlistctrl.store);

router.get("/:id", playlistctrl.show);

router.put("/:id", playlistctrl.update);

router.delete("/:id", playlistctrl.destroy);

module.exports = router;
