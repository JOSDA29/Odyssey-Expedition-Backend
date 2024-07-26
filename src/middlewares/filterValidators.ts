import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validsParametersFilter = [
    check('phoneNumber')
        .isLength({ min: 10, max: 10 })
        .withMessage('El telefono debe contener 10 digitos')
        .matches(/^\d+$/)
        .withMessage('El telefono debe contener solo numeros')
        .optional()
];

function validatorFilter(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validsParametersFilter, validatorFilter };
