const { checkSchema } = require("express-validator");

const createUserSchema = checkSchema({
  correo: {
    errorMessage: "correo invalido",
    isEmail: true,
  },
  contraseña: {
    isLength: {
      options: { min: 8 },
      errorMessage: "la contraseña debería ser de al menos 8 caracteres",
    },
  },
});

module.exports = createUserSchema;
