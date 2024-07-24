import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validatorParamsGetByEmail = [
    check('email').isEmail().withMessage('Ingrese un email válido').optional(),
];

export function validatorGetByEmail(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}
