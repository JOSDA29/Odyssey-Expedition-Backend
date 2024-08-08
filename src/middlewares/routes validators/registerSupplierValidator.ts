import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validatorParamsRegister = [
    check('email')
        .isEmail()
        .withMessage('Se debe ingresar un email válido')
        .normalizeEmail(),

    check('companyName')
        .isLength({ min: 3 })
        .withMessage(
            'El nombre de la empresa debe contener mínimo 3 caracteres',
        )
        .matches(/^[a-zA-Z0-9\s,.-]+$/)
        .withMessage(
            'El nombre de la empresa solo puede contener letras, números, espacios y ciertos caracteres de puntuación',
        )
        .toLowerCase(),

    check('address')
        .optional()
        .isLength({ min: 10 })
        .withMessage('La dirección debe contener mínimo 10 caracteres')
        .matches(/^[a-zA-Z0-9\s,.#*-]+$/)
        .withMessage('La dirección solo puede contener letras, números, espacios y ciertos caracteres de especiales')
        .toLowerCase(), 

    check('supplierID')
        .isLength({ min: 5 })
        .withMessage('El ID del proveedor debe tener mínimo 5 caracteres')
        .toLowerCase(),

    check('phoneNumber')
        .isLength({ min: 10, max: 10 })
        .withMessage('El teléfono debe contener 10 dígitos')
        .matches(/^\d+$/)
        .withMessage('El teléfono debe contener solo números'),

    check('state')
        .optional()
        .isBoolean()
        .withMessage('El estado debe ser un valor booleano'),
];

function validatorRegister(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validatorParamsRegister, validatorRegister };
