import express from 'express';
import validateToken from '../../middlewares/validateTokenMiddleware';

import registerSupplier from '../../controllers/supplier/register';
import changeState from '../../controllers/supplier/changeState';
import updateSupplier from '../../controllers/supplier/update';

import { 
    validatorParamsRegister, 
    validatorRegister 
} from '../../middlewares/routes validators/registerSupplierValidator';

import { 
    validatorParamsUpdateSupplier, 
    validatorUpdateSupplier 
} from '../../middlewares/routes validators/updateSupplierValidator';

import { 
    changeStateValidator, 
    validator 
} from '../../middlewares/changeStateValidator';


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

router.put(
    '/changeState',
    validateToken(['Adviser']),
    changeStateValidator,
    validator,
    changeState,
);


export default router;
