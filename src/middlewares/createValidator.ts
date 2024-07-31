import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParams = [
    check('name').isLength({ min: 5, max: 20}).withMessage("El nombre debe tener entre 5 y 20 caracteres"),
    check('destination').isLength({ min: 5, max: 15}).withMessage("La ciudad de ubicacion del Hotel debe contener entre 5 y 15 caracteres"),
    check('startDate').isDate(),
    check('endDate').isDate,
    check('numberOfPeople').isNumeric(),
    check('room').isLength({ min: 1 }).withMessage("El hotel debe tener minimo una habitacion"),
    check('description').isLength({ min: 10, max: 20}).withMessage("La descripción debe contener entre 10 y 20 caracteres"),
    check('location').isLength({min: 10, max: 20}).withMessage("La ubicacion debe contener entre 10 y 20 caracteres"),
    check('hotelServices').isString(),
    check('price').isNumeric(),
];

export function validator (req: Request, res: Response, next: NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default { validatorParams, validator };