import express from 'express';
import {
    changePasswordValidator,
    handleValidation,
} from '../../../middlewares/updatePasswordValidator';

import {
    validatorParamsEmail,
    validatorEmail,
} from '../../../middlewares/emailValidator';

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
import deleteAdviserController from '../../../controllers/user/adviser/delete';



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
    validatorParamsEmail,
    validatorEmail,
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

router.delete(
    '/delete/:email',
    validateToken(['Administrator']),
    validatorParamsEmail,
    validatorEmail,
    deleteAdviserController,
);

export default router;
