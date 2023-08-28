const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { body, validationResult } = require("express-validator");
require("./database/config");

dotenv.config();

const app = express();
const port = process.env.PORT;

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.use("/", require("../api/routes/usuario.routes"));
app.use("/canciones", require("../api/routes/canciones.routes"));
app.use("/playlist", require("../api/routes/playlist.routes"));

app.use((req, res, next) => {
  res.status(404).send("Error 404");
});

app.post(
  "/usuario",
  body("email").notEmpty().isEmail(),
  body("contraseña").notEmpty(),
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return res.json(req.body);
    }
    console.log(req.body);
    res.status(400).json(errors.array());
  }
);

app.listen(process.env.PORT, async () => {
  try {
    console.log("conexion exitosa en el puerto: " + port);
  } catch (error) {
    console.log("no fue posible establecer la conexion" + error);
  }
});
