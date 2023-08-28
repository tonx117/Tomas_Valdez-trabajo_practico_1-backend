import { checkSchema } from "express-validator";

export const createUserSchema = checkSchema({
  correo: {
    errorMessage: "correo invalido",
    isEmail: true,
  },
  contraseña: {
    isLength: {
      options: { min: 8 },
      errorMessage: "la contraseña deberia ser de almenos 8 caracteres",
    },
  },
});
