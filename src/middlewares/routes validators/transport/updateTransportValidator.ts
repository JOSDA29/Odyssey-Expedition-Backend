import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParamsUpdate = [
    check('transportID').isString().withMessage("El ID del transporte a actualizar es obligatorio y este debe ser una cadena de texto"),
    check('origin').isString().isLength({ min: 10, max: 255 }).withMessage("La ciudad de origen debe contener entre 10 y 255 caracteres").optional(),
    check('destination').isString().isLength({ min: 10, max: 255 }).withMessage("La ciudad de destino debe contener entre 10 y 255 caracteres").optional(),
    check('arrivalDate').isDate().withMessage("La fecha de llegada debe ser válida (YYYY/MM/DD)").optional(),
    check('departureDate').isDate().withMessage("La fecha de salida debe ser válida (YYYY/MM/DD)").optional(),
    check('numberOfPeople').isNumeric().withMessage("El número de personas debe ser un valor numérico").optional(),
    check('price').isNumeric().withMessage("El precio debe ser un valor numérico").optional(),
    check('state').isBoolean().withMessage("El estado debe ser un valor booleano").optional().optional(),
    check('trackNumber').isString().withMessage("El número de seguimiento debe ser un valor de tipo string").optional()
];

export function validatorUpdate (req: Request, res: Response, next: NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }else{
    next();
    }
}


export default { validatorParamsUpdate, validatorUpdate };