import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParamsFilter = [
    check('id').optional().isNumeric().withMessage("El ID debe ser un valor numérico"),
    check('origin').optional().isLength({ min: 2, max: 15 }).withMessage("La ciudad de origen debe tener entre 2 y 15 caracteres"),
    check('destination').optional().isLength({ min: 2, max: 15 }).withMessage("El destino debe tener entre 2 y 15 caracteres"),
    check('departureDate').optional().isISO8601().withMessage("Debe ser una fecha válida en formato ISO 8601"),
    check('returnDate').optional().isISO8601().withMessage("Debe ser una fecha válida en formato ISO 8601"),
    check('numberOfPeople').optional().isNumeric().withMessage("Debe ser un valor numérico"),
    check('itinerary').optional().isLength({ min: 10, max: 255 }).withMessage("El itinerario debe tener entre 10 y 255 caracteres"),
    check('packageServices').optional().isLength({ min: 10, max: 255 }).withMessage("Los servicios deben tener entre 10 y 255 caracteres"),
    check('customerPreferences').optional().isLength({ min: 5, max: 255 }).withMessage("Las preferencias deben tener entre 5 y 255 caracteres"),
    check('state').optional().isBoolean().withMessage("El estado debe ser true o false"),
    check('fkHotelID').optional().isNumeric().withMessage("El ID del hotel debe ser un valor numérico"),
    check('fkTransportID').optional().isString().withMessage("El ID del transporte debe ser una cadena de texto"),
    check('status').optional().isString().withMessage("El estado debe ser una cadena de texto"),
    check('minPrice').optional().isNumeric().withMessage("El precio mínimo debe ser un valor numérico"),
    check('maxPrice').optional().isNumeric().withMessage("El precio máximo debe ser un valor numérico")
];

export function validatorFilter(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default { validatorParamsFilter, validatorFilter };
