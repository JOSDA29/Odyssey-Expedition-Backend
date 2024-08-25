import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParams = [
    check('transportID').isLength({ min: 3, max: 20 }).withMessage("El id del transporte debe tener entre 3 y 20 caracteres"),
    check('transporttype').isIn(['crucero', 'vuelo']).withMessage("El tipo de transporte debe ser 'crucero' o 'vuelo'"),
    check('company').isString().isLength({ min: 2, max: 255 }).withMessage("El nombre de la compañía debe contener entre 2 y 255 caracteres"),
    check('origin').isString().isLength({ min: 10, max: 255 }).withMessage("La ciudad de origen debe contener entre 10 y 255 caracteres"),
    check('destination').isString().isLength({ min: 10, max: 255 }).withMessage("La ciudad de destino debe contener entre 10 y 255 caracteres"),
    check('arrivalDate').isDate().withMessage("La fecha de llegada debe ser válida (YYYY/MM/DD)"),
    check('departureDate').isDate().withMessage("La fecha de salida debe ser válida (YYYY/MM/DD)"),
    check('numberOfPeople').isNumeric().withMessage("El número de personas debe ser un valor numérico"),
    check('price').isNumeric().withMessage("El precio debe ser un valor numérico"),
    check('state').isBoolean().withMessage("El estado debe ser un valor booleano").optional(),
    check('trackNumber').optional().isString().withMessage("El número de seguimiento debe ser un valor de tipo string")
];

export function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        next();
    }
}

export default { validatorParams, validator };
