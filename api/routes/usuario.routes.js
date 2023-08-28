const usuarioctrl = require("../controllers/controladores.usuario");

const router = require("express").Router();

router.get("/usuario", usuarioctrl.index);

router.post("/usuario", usuarioctrl.store);

router.get("/usuario/:id", usuarioctrl.show);

router.put("/usuario/:id", usuarioctrl.update);

router.delete("/usuario/:id", usuarioctrl.destroy);

router.post("/usuario/login", usuarioctrl.login);

module.exports = router;
