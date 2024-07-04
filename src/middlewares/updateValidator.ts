import { check, validationResult, body } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validsParameters = [
    body('email').custom((value, { req }) => {
        if (value) {
            throw new Error('You must not update the email.');
        }
        return true;
    }),
    // Validaciones
    check('nombre').optional().isString(),
    check('apellidos').optional().isString(),
    check('contrasenia').optional().isString(),
    check('telefono').optional().isString(),
    check('imagen').optional().isString()
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export { validsParameters, validator };
