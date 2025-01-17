import express from 'express';
import validateToken from '../../../middlewares/validateTokenMiddleware';
import { validatorParamsPackage, validator } from '../../../middlewares/routes validators/package/createValidator';
import { validatorParamsPackageUpdate, validatorUpdate } from '../../../middlewares/routes validators/package/updateValidator';
import { validatorParamsFilter, validatorFilter } from '../../../middlewares/routes validators/package/filterValidator';
import upload from '../../../middlewares/multerMiddleware';

import createController from '../../../controllers/managementServices/package/create';
import uploadImageController from '../../../controllers/managementServices/package/uploadImage';
import updateController from '../../../controllers/managementServices/package/update';
import deleteController from '../../../controllers/managementServices/package/delete';
import filterController from '../../../controllers/managementServices/package/filter';



const router = express.Router();

router.post('/create', validateToken(['Adviser']), validatorParamsPackage, validator, createController);

router.put('/updateImage', validateToken(['Adviser']), upload.single('file'), uploadImageController);

router.put('/update', validateToken(['Adviser']), validatorParamsPackageUpdate, validatorUpdate, updateController);

router.delete('/delete/:id', validateToken(['Adviser']), deleteController);

router.get('/filter', validatorParamsFilter, validatorFilter, filterController);

export default router;