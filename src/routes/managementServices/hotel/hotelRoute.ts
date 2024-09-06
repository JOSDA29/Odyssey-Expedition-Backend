import express from 'express';
import createHotelController from '../../../controllers/managementServices/hotel/create';
import updateHotelController from '../../../controllers/managementServices/hotel/update';
import updateHotelImageController from '../../../controllers/managementServices/hotel/updateImage';
import deleteHotelController from '../../../controllers/managementServices/hotel/delete';
import getAllController from '../../../controllers/managementServices/hotel/getAll';
import getByIdController from '../../../controllers/managementServices/hotel/getById';
import filterController from '../../../controllers/managementServices/hotel/filter';
import validateToken from '../../../middlewares/validateTokenMiddleware';
import { validatorParams, validator } from '../../../middlewares/routes validators/hotel/createHotelValidator';
import {validatorParamsUpdate, validatorUpdate } from '../../../middlewares/routes validators/hotel/updateHotelValidator';
import upload from '../../../middlewares/multerMiddleware';
import { validatorParamsEmail, validatorEmail } from '../../../middlewares/routes validators/emailValidator';

const router = express.Router();

router.post('/create', validateToken(['Adviser']), validatorParams, validator, createHotelController);

router.put('/update', validateToken(['Adviser']), validatorParamsUpdate, validatorUpdate, updateHotelController);

router.put('/uploadImage', upload.single('file'), validateToken(['Adviser']), updateHotelImageController);

router.delete('/delete/:id', validateToken(['Adviser']), validatorParamsEmail, validatorEmail, deleteHotelController);

router.get('/getAll', validateToken(['Adviser', 'Administrator']), getAllController);

router.get('/getById/:id', validateToken(['Adviser', 'Administrator']), getByIdController);

router.get('/filter', validateToken(['Adviser', 'Administrator', 'Client']), filterController);

export default router;