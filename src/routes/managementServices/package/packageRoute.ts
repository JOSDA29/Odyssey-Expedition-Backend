import express from 'express';
import validateToken from '../../../middlewares/validateTokenMiddleware';
import { validatorParamsPackage, validator } from '../../../middlewares/routes validators/package/createValidator';
import { validatorParamsPackageUpdate, validatorUpdate } from '../../../middlewares/routes validators/package/updateValidator';


import createController from '../../../controllers/managementServices/package/create';
import uploadImageController from '../../../controllers/managementServices/package/uploadImage';
import updateController from '../../../controllers/managementServices/package/update';
import upload from '../../../middlewares/multerMiddleware';

const router = express.Router();

router.post('/create', validateToken(['Adviser']),  validatorParamsPackage, validator, createController);

router.put('/updateImage', validateToken(['Adviser']), upload.single('file'), uploadImageController);

router.put('/update', validateToken(['Adviser']), validatorParamsPackageUpdate, validatorUpdate, updateController );

export default router;