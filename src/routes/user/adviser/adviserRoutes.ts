import express from 'express';
import {
    changePasswordValidator,
    handleValidation,
} from '../../../middlewares/updatePasswordValidator';

import {
    validatorParamsGetByEmail,
    validatorGetByEmail,
} from '../../../middlewares/finByEmailValidator';

import {
    validatorRegister,
    validatorParamsRegister,
} from '../../../middlewares/registerValidator';

import {
    validsParametersUpdate,
    validatorUpdate,
} from '../../../middlewares/updateValidator';

import validateToken from '../../../middlewares/validateTokenMiddleware';
import getAllController from '../../../controllers/user/adviser/getAll';
import getByEmailController from '../../../controllers/user/adviser/getByEmail';
import registerController from '../../../controllers/user/adviser/registerAdviser';
import updateDataController from '../../../controllers/user/adviser/update';
import changePasswordController from '../../../controllers/user/adviser/changePassword';



const router = express.Router();

router.patch(
    '/changePassword',
    validateToken(['Adviser']),
    changePasswordValidator,
    handleValidation,
    changePasswordController,
);

router.get('/getAll', validateToken(['Administrator']), getAllController);

router.get(
    '/getByEmail/:email?',
    validateToken(['Adviser', 'Administrator']),
    validatorParamsGetByEmail,
    validatorGetByEmail,
    getByEmailController,
);


router.post(
    '/registerAdviser',
    validateToken(['Administrator']),
    validatorParamsRegister,
    validatorRegister,
    registerController,
);


router.put(
    '/update',
    validateToken(['Administrator']),
    validsParametersUpdate,
    validatorUpdate,
    updateDataController,
);

export default router;
