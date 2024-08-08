import express from 'express';
import changePasswordController from '../../../controllers/user/client/changePassword';
import getAll from '../../../controllers/user/client/getAll';
import getByEmail from '../../../controllers/user/client/getByEmail';
import register from '../../../controllers/user/client/registerController';
import updateDataController from '../../../controllers/user/client/update';
import uploadImage from '../../../controllers/user/client/uploadImage';
import changeStateController from '../../../controllers/user/client/changeState';

import {
    validatorParamsEmail,
    validatorEmail,
} from '../../../middlewares/routes validators/emailValidator';

import {
    changePasswordValidator,
    handleValidation,
} from '../../../middlewares/routes validators/updatePasswordValidator';

import {
    validatorParamsRegister,
    validatorRegister,
} from '../../../middlewares/routes validators/registerValidator';

import {
    validsParametersUpdate,
    validatorUpdate,
} from '../../../middlewares/routes validators/updateValidator';

import {
    changeStateValidator,
    validator,
} from '../../../middlewares/changeStateValidator';

import validateToken from '../../../middlewares/validateTokenMiddleware';
import upload from '../../../middlewares/multerMiddleware';
import getImage from '../../../controllers/user/client/getImage';

const router = express.Router();

router.patch(
    '/changePassword',
    validateToken(['Client']),
    changePasswordValidator,
    handleValidation,
    changePasswordController,
);

router.post(
    '/uploadImage',
    upload.single('file'),
    validateToken(['Client']),
    uploadImage,
);

router.get('/getAll', validateToken(['Adviser']), getAll);

router.get(
    '/getByEmail/:email?',
    validateToken(['Client', 'Adviser']),
    validatorParamsEmail,
    validatorEmail,
    getByEmail,
);

router.get('/getImage', validateToken(['Client']), getImage);

router.post('/register', validatorParamsRegister, validatorRegister, register);

router.put(
    '/',
    validateToken(['Client']),
    changeStateValidator,
    validator,
    changeStateController,
);

router.put(
    '/update',
    validateToken(['Client']),
    validsParametersUpdate,
    validatorUpdate,
    updateDataController,
);

export default router;
