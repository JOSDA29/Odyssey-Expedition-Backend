import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParamsPackageUpdate = [
    check('origin').isLength({ min: 2, max: 15}).withMessage("La ciudad de origen debe tener minimo 2 y 15 caracteres").optional(),
    check('destination').isLength({ min: 2, max: 15}).withMessage("El destino debe tener entre 2 y 15 caracteres").optional(),
    check('departureDate').isDate().withMessage("Debe ser una fecha").optional(),
    check('returnDate').isDate().withMessage("Debe ser una fecha").optional(),
    check('numberOfPeople').isNumeric().withMessage("Debe ser un valor numerico").optional(),
    check('itinerary').isLength({min: 10, max: 255}).withMessage("El itinerario debe tener minimo 10 y maximo 50 caracteres").optional(),
    check('packageServices').isLength({ min: 10, max: 255}).withMessage("Los servicios que se ofrecen debe tener minimo 10 y maximo 30 caracteres").optional(),
    check('customerPreferences').isLength({min: 5, max: 255}).withMessage("Las preferencias del cliente debe tener minimo 5 y maximo 15 caracteres").optional(),
    check('state').isBoolean().withMessage("El estado debe ser true o false").optional(),
    check('fkHotelID').isNumeric().optional(),
    check('fkTransportID').isString().optional(),
    check('status').isString().withMessage("El estado debe estar entre prospecto, cotizacion enviada, cerrado ganado, cerrado perdido").optional(),
    check('totalPrice').isNumeric().optional()
];

export function validatorUpdate (req: Request, res: Response, next: NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    } else {
        next();
    }

}

export default { validatorParamsPackageUpdate, validatorUpdate };