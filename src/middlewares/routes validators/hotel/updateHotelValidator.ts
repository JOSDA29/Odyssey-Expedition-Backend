import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParamsUpdate = [
    check('name').isLength({ min: 5, max: 20}).withMessage("El nombre debe tener entre 5 y 20 caracteres")
    .optional(),
    check('destination').isLength({ min: 5, max: 255}).withMessage("La ciudad de ubicacion del Hotel debe contener entre 5 y 255 caracteres")
    .optional(),
    check('startDate').isDate()
    .optional(),
    check('endDate').isDate()
    .optional(),
    check('numberOfPeople').isNumeric()
    .optional(),
    check('room').isLength({ min: 1 }).withMessage("El hotel debe tener minimo una habitacion")
    .optional(),
    check('description').isLength({ min: 10, max: 255}).withMessage("La descripción debe contener entre 10 y 255 caracteres")
    .optional(),
    check('location').isLength({min: 5, max: 255}).withMessage("La ubicacion debe contener entre 5 y 255 caracteres")
    .optional(),
    check('hotelServices').isString()
    .optional(),
    check('state')
    .optional(),
    check('price').isNumeric()
    .optional(),
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