import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validsParametersUpdate = [
    check('name')
        .isLength({ min: 3, max: 50 })
        .withMessage('El nombre debe contener minimo 3 y maximo 25 caracteres')
        .toLowerCase()
        .optional(),
    check('lastName')
        .isLength({ min: 3, max: 50 })
        .withMessage('El nombre debe contener minimo 3 y maximo 25 caracteres')
        .toLowerCase()
        .optional(),
    check('phoneNumber')
        .isLength({ min: 10, max: 10 })
        .withMessage('El telefono debe contener 10 digitos')
        .matches(/^\d+$/)
        .withMessage('El telefono debe contener solo numeros')
        .optional(),
    check('state')
    .isBoolean()
    .withMessage("El estado debe ser un valor booleano")
    .optional(),
    ];

function validatorUpdate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validsParametersUpdate, validatorUpdate };
