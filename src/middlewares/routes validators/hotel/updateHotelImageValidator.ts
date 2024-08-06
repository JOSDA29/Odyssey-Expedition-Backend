import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validatorParamsUpdateImage = [
    check('id').isNumeric(),
    check('imageUrl').isString(),
];

export function validatorUpdateImage (req: Request, res: Response, next: NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()}); 
    } else {
        next();
    }
}

export default { validatorParamsUpdateImage, validatorUpdateImage };