import express from 'express';
import validateToken from '../../middlewares/validateTokenMiddleware';

import registerSupplier from '../../controllers/supplier/register';
import updateSupplier from '../../controllers/supplier/update';

import { 
    validatorParamsRegister, 
    validatorRegister 
} from '../../middlewares/routes validators/registerSupplierValidator';

import { 
    validatorParamsUpdateSupplier, 
    validatorUpdateSupplier 
} from '../../middlewares/routes validators/updateSupplierValidator';


const router = express.Router();

router.post(
    '/register',
    validateToken(['Adviser']),
    validatorParamsRegister,
    validatorRegister,
    registerSupplier,
);

router.put(
    '/update',
    validateToken(['Adviser']),
    validatorParamsUpdateSupplier,
    validatorUpdateSupplier,
    updateSupplier,
);


export default router;
