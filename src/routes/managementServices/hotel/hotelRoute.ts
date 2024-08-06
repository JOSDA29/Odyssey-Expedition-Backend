import express from 'express';
import createHotelController from '../../../controllers/managementServices/hotel/create';
import updateHotelController from '../../../controllers/managementServices/hotel/update';
import updateHotelImageController from '../../../controllers/managementServices/hotel/updateImage';
import deleteHotel from '../../../controllers/managementServices/hotel/delete';
import validateToken from '../../../middlewares/validateTokenMiddleware';
import { validatorParams, validator } from '../../../middlewares/routes validators/hotel/createHotelValidator';
import {validatorParamsUpdate, validatorUpdate } from '../../../middlewares/routes validators/hotel/updateHotelValidator';
import upload from '../../../middlewares/multerMiddleware';
import { validatorParamsEmail, validatorEmail } from '../../../middlewares/routes validators/emailValidator';

const router = express.Router();

router.post('/create', validateToken(['Adviser']), validatorParams, validator, createHotelController);

router.put('/update', validateToken(['Adviser']), validatorParamsUpdate, validatorUpdate, updateHotelController);

router.post('/uploadImage', upload.single('file'), validateToken(['Adviser']), updateHotelImageController);

router.delete('/delete/:id', validateToken(['Adviser']), validatorParamsEmail, validatorEmail, deleteHotel);
export default router;