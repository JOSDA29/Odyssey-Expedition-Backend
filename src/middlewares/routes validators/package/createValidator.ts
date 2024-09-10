import { NextFunction, Request, Response } from "express";
import { check, validationResult, body } from "express-validator";

export const validatorParamsPackage = [
    check('origin').isLength({ min: 2, max: 15 }).withMessage("La ciudad de origen debe tener entre 2 y 15 caracteres"),
    check('destination').isLength({ min: 2, max: 15 }).withMessage("El destino debe tener entre 2 y 15 caracteres"),
    check('departureDate')
        .isDate().withMessage("Debe ser una fecha")
        .custom((value) => {
            const today = new Date();
            const departureDate = new Date(value);
            today.setHours(0, 0, 0, 0);
            departureDate.setHours(0, 0, 0, 0);
            if (departureDate < today) {
                throw new Error("La fecha de salida no puede ser anterior a la fecha actual");
            }
            return true;
        }),
    check('returnDate').isDate().withMessage("Debe ser una fecha"),
    check('numberOfPeople').isNumeric().withMessage("Debe ser un valor numérico").isInt({ min: 1 }).withMessage("Debe ser mayor a 0"),
    check('itinerary').isLength({ min: 10, max: 255 }).withMessage("El itinerario debe tener entre 10 y 255 caracteres"),
    check('customerPreferences').isLength({ min: 5, max: 255 }).withMessage("Las preferencias del cliente deben tener entre 5 y 255 caracteres"),
    check('state').isBoolean().withMessage("El estado debe ser true o false"),
];

export function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        next();
    }
}

export default { validatorParamsPackage, validator };
