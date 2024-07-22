import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validsParameters = [
    // Validaciones
    check('name')
        .isLength({ min: 3, max: 25 })
        .withMessage('El nombre debe contener minimo 3 y maximo 25 caracteres')
        .toLowerCase()
        .optional(),
    check('lastName')
        .isLength({ min: 3, max: 25 })
        .withMessage('El nombre debe contener minimo 3 y maximo 25 caracteres')
        .toLowerCase()
        .optional(),
    check('phoneNumber')
        .isLength({ min: 10, max: 10 })
        .withMessage('El telefono debe contener 10 digitos')
        .matches(/^\d+$/)
        .withMessage('El telefono debe contener solo numeros')
        .optional(),
    check('image')
        .optional(),
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validsParameters, validator };
