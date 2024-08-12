import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParamsPackage = [
    check('origin').isLength({ min: 2, max: 15}).withMessage("La ciudad de origen debe tener minimo 2 y 15 caracteres"),
    check('destination').isLength({ min: 2, max: 15}).withMessage("El destino debe tener entre 2 y 15 caracteres"),
    check('departureDate').isDate().withMessage("Debe ser una fecha"),
    check('returnDate').isDate().withMessage("Debe ser una fecha"),
    check('numberOfPeople').isNumeric().withMessage("Debe ser un valor numerico"),
    check('itinerary').isLength({min: 10, max: 50}).withMessage("El itinerario debe tener minimo y maximo 50 caracteres"),
    check('packageServices').isLength({ min: 10, max: 30}).withMessage("Los servicios que se ofrecen debe tener minimo 10 y maximo 30 caracteres"),
    check('customerPreferences').isLength({min: 5, max: 15}).withMessage("Las preferencias del cliente debe tener minimo 5 y maximo 15 caracteres"),
    check('state').isString().withMessage("El estado debe estar entre prospecto, cotizacion enviada, cerrado ganado, cerrado perdido"),
    check('fkHotelID').isNumeric(),
    check('fkTransportID').isNumeric(),
    check('status').isString(),
    check('totalPrice').isNumeric(),
    check('fkAdviserEmail').isString()
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