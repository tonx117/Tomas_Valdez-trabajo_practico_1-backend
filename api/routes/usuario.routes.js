const usuarioctrl = require("../controllers/controladores.usuario");

const validateSchema = require("../../src/middlewares/validacion.esquema");
const createUserSchema = require("../models/esquema.usuario");

const router = require("express").Router();

router.get("/usuario", usuarioctrl.index);

router.get("/usuario/:id", usuarioctrl.show);

router.put("/usuario/:id", usuarioctrl.update);

router.delete("/usuario/:id", usuarioctrl.destroy);

router.post("/usuario/login", usuarioctrl.login);

router.post("/usuario", createUserSchema, validateSchema, usuarioctrl.store);

module.exports = router;
