import express from 'express';
import {
    validatorParamsRegister,
    validatorRegister,
} from '../../middlewares/registerSupplierValidator';
import registerSupplier from '../../controllers/supplier/register';
import validateToken from '../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.post(
    '/register',
    validateToken(['Adviser']),
    validatorParamsRegister,
    validatorRegister,
    registerSupplier,
);

export default router;
