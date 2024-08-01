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

import {
    validsParametersFilter,
    validatorFilter,
} from '../../../middlewares/filterValidators';

import validateToken from '../../../middlewares/validateTokenMiddleware';
import getAllController from '../../../controllers/user/adviser/getAll';
import getByEmailController from '../../../controllers/user/adviser/getByEmail';
import registerController from '../../../controllers/user/adviser/registerAdviser';
import updateDataController from '../../../controllers/user/adviser/update';
import changePasswordController from '../../../controllers/user/adviser/changePassword';
import deleteAdviserController from '../../../controllers/user/adviser/delete';
import searchFilterController from '../../../controllers/user/adviser/searchFilter';

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
    '/register',
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

router.get(
    '/filter',
    validateToken(['Administrator']),
    validatorParamsRegister,
    validatorFilter,
    searchFilterController,
);

export default router;
