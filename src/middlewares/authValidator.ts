import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const validatorParams = [
    check('email').isEmail().withMessage('It must be a valid email.'),
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validatorParams, validator };
