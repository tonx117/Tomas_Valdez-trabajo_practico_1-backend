const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
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

app.use((req, res, next) => {
  res.status(404).send("Error 404");
});

app.listen(process.env.PORT, async () => {
  try {
    console.log("conexion exitosa en el puerto: " + port);
  } catch (error) {
    console.log("no fue posible establecer la conexion" + error);
  }
});
