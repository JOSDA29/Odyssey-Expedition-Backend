import express, { Router } from 'express';
import getByEmailController from '../../../controllers/user/adviser/getByEmail';
import { validatorParams, validator } from '../../../middlewares/finByEmailValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.patch('/', validateToken(['Adviser', 'Administrator']), validatorParams, validator, getByEmailController);

export default router;