import express from 'express';
import getByEmailController from '../../../controllers/user/admin/getByEmail';
import { validatorParams, validator } from '../../../middlewares/finByEmailValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.get('/', validateToken(['Administrator']), validatorParams, validator, getByEmailController);

export default router;