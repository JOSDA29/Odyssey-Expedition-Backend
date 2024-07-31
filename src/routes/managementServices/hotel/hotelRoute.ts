import express from 'express';
import createHotel from '../../../controllers/managementServices/hotel/create';
import validateToken from '../../../middlewares/validateTokenMiddleware';
import { validatorParams, validator } from '../../../middlewares/createValidator';

const router = express.Router();

router.post('/create', validateToken(['Adviser']), validatorParams, validator, createHotel);

export default router;