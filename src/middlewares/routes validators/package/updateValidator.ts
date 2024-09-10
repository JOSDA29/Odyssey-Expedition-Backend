import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParamsPackageUpdate = [
    check('id')
        .isNumeric()
        .withMessage("El ID del paquete debe ser un dato numerico")
        .optional(),
    check('origin')
        .isLength({ min: 2, max: 50 })
        .withMessage("La ciudad de origen debe tener mínimo 2 y máximo 50 caracteres")
        .optional(),
    check('destination')
        .isLength({ min: 2, max: 50 })
        .withMessage("El destino debe tener entre 2 y 50 caracteres")
        .optional(),
    check('departureDate')
        .isDate()
        .withMessage("Debe ser una fecha con formato (YYYY/MM/DD)")
        .optional(),
    check('returnDate')
        .isDate()
        .withMessage("Debe ser una fecha con formato (YYYY/MM/DD)")
        .optional(),
    check('numberOfPeople')
        .isInt({ min: 1 })
        .withMessage("Debe ser un valor numérico mayor a 0")
        .optional(),
    check('itinerary')
        .isLength({ min: 10, max: 255 })
        .withMessage("El itinerario debe tener mínimo 10 y máximo 255 caracteres")
        .optional(),
    check('customerPreferences')
        .isLength({ min: 5, max: 255 })
        .withMessage("Las preferencias del cliente deben tener mínimo 5 y máximo 255 caracteres")
        .optional(),
    check('state')
        .isBoolean()
        .withMessage("El estado debe ser true o false")
        .optional(),
];

export function validatorUpdate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        next();
    }
}

export default { validatorParamsPackageUpdate, validatorUpdate };
