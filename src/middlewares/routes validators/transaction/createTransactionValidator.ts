import {Request, Response, NextFunction} from 'express';
import { check, validationResult } from 'express-validator';

export const validatorParamsTransaction = [
    check('clientEmail').isEmail().withMessage('Ingrese un email valido'),
    check('adviserEmail').isEmail().withMessage('Ingrese un email valido'),
    check('billingDate').isDate().withMessage('Debe ser una fecha'),
    check('service').isString().withMessage('El servicio debe ser alguno de estos tipos: hotel, vuelo, crucero'),
    check('paymentMethod').isString().withMessage('Debe ser de tipo texto'),
    check('serviceType').isString().isIn(['Hotel', 'Transport', 'Package']).withMessage('Ingrese un servicio válido'),
    check('description').isString().withMessage('Ingrese una cadena de texto'),
    check('state').isString().isIn(['prospecto', 'cotizacion enviada', 'cerrado ganado', 'cerrado perdido']).withMessage('El estado debe ser alguno de los siguientes: prospecto, cotizacion enviada, cerrado ganado, cerrado perdido' )
]

export function validatorTransaction(req: Request, res: Response, next: NextFunction) {
   const errors = validationResult(req);
   if(!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
   }
   next();
}

export default { validatorParamsTransaction, validatorTransaction };