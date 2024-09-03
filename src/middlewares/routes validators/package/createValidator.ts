import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParamsPackage = [
    check('origin').isLength({ min: 2, max: 15}).withMessage("La ciudad de origen debe tener minimo 2 y 15 caracteres"),
    check('destination').isLength({ min: 2, max: 15}).withMessage("El destino debe tener entre 2 y 15 caracteres"),
    check('departureDate').isDate().withMessage("Debe ser una fecha"),
    check('returnDate').isDate().withMessage("Debe ser una fecha"),
    check('numberOfPeople').isNumeric().withMessage("Debe ser un valor numerico"),
    check('itinerary').isLength({min: 10, max: 255}).withMessage("El itinerario debe tener minimo 10 y maximo 50 caracteres"),
    check('customerPreferences').isLength({min: 5, max: 255}).withMessage("Las preferencias del cliente debe tener minimo 5 y maximo 15 caracteres"),
    check('state').isBoolean().withMessage("El estado debe ser true o false"),
    check('totalPrice').isNumeric()
];

export function validator (req: Request, res: Response, next: NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    } else {
        next();
    }

}

export default { validatorParamsPackage, validator };