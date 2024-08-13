import express from 'express';
import validateToken from '../../../middlewares/validateTokenMiddleware';
import { validatorParamsPackage, validator } from '../../../middlewares/routes validators/package/createValidator';
import createController from '../../../controllers/managementServices/package/create';
import uploadImageController from '../../../controllers/managementServices/package/uploadImage';
import upload from '../../../middlewares/multerMiddleware';

const router = express.Router();

router.post('/create', validateToken(['Adviser']),  validatorParamsPackage, validator, createController);

router.put('/updateImage', validateToken(['Adviser']), upload.single('file'), uploadImageController);

export default router;