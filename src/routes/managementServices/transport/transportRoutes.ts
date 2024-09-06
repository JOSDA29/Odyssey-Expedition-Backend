import express from 'express';
import validateToken from "../../../middlewares/validateTokenMiddleware";

import upload from '../../../middlewares/multerMiddleware';
import updateImage from '../../../controllers/managementServices/transport/updateImage';
import createTransport from "../../../controllers/managementServices/transport/create";
import updateTransport from '../../../controllers/managementServices/transport/update';
import filterTransport from '../../../controllers/managementServices/transport/filter';

import { validator, validatorParams } from '../../../middlewares/routes validators/transport/createTransportValidator';
import { validatorUpdate, validatorParamsUpdate } from '../../../middlewares/routes validators/transport/updateTransportValidator';

const router = express.Router();

router.post('/create', validateToken(['Adviser']), validatorParams, validator, createTransport);

router.put('/update', validateToken(['Adviser']), validatorParamsUpdate, validatorUpdate, updateTransport);

router.put('/uploadImage', upload.single('file'), validateToken(['Adviser']), updateImage);

router.get('/filter', validateToken(['Adviser', 'Administrator', 'Client']),  filterTransport);



export default router;