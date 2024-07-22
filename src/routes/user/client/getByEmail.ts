import express, { Router } from 'express';
import getByEmail from '../../../controllers/user/client/getByEmail';
import { validatorParams, validator } from '../../../middlewares/finByEmailValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.get('/', validateToken(['Client', 'Adviser']), validatorParams, validator, getByEmail);

export default router