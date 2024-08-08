import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';

const changeStateValidator = [
    check('state').isBoolean().withMessage('El estado deber ser True o False'),
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { changeStateValidator, validator };
