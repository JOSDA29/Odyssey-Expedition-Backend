import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";


const validatorParams = [
  check("email").isEmail().withMessage("Se debe ingresar un email valido"),
  check("password")
    .isLength({ min: 8, max: 20 })
    .withMessage("La contraseña debe contener minimo 8 caracteres y maximo 20")
    .matches(/(?=.*[a-z])/)
    .withMessage("La contraseña debe contener al menos una letra minúscula")
    .matches(/(?=.*[A-Z])/)
    .withMessage("La contraseña debe contener al menos una letra mayúscula")
    .matches(/(?=.*\W)/)
    .withMessage("La contraseña debe contener al menos un carácter especial"),
  check("name")
    .isLength({ min: 3, max: 25 })
    .withMessage("El nombre debe contener minimo 3 y maximo 25 caracteres")
    .toLowerCase(),
  check("lastName")
    .isLength({ min: 3, max: 25 })
    .withMessage("El nombre debe contener minimo 3 y maximo 25 caracteres")
    .toLowerCase(),
  check("phoneNumber")
    .isLength({ min: 10, max: 10 })
    .withMessage("El telefono debe contener 10 digitos")
    .matches(/^\d+$/)
    .withMessage("El telefono debe contener solo numeros"),
];

function validator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

export { validatorParams, validator };