import express from 'express';
import { changePasswordValidator, handleValidation } from '../../../middlewares/updatePasswordValidator';
import { validatorParamsEmail, validatorEmail } from '../../../middlewares/emailValidator';
import { validsParametersUpdate, validatorUpdate } from '../../../middlewares/updateValidator';
import changePasswordController from '../../../controllers/user/admin/changePassword';
import getByEmailController from '../../../controllers/user/admin/getByEmail';
import updateDataController from '../../../controllers/user/admin/update';


import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.patch(
    '/changePassword',
    validateToken(['Administrator']),
    changePasswordValidator,
    handleValidation,
    changePasswordController,
);

router.get(
    '/getByEmail',
    validateToken(['Administrator']),
    validatorParamsEmail,
    validatorEmail,
    getByEmailController,
);

router.put(
    '/update',
    validateToken(['Administrator']),
    validsParametersUpdate,
    validatorUpdate,
    updateDataController,
);

export default router;
