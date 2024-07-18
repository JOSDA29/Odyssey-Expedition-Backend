import express, { Router } from 'express';
import findAll from '../../../controllers/user/client/FindAll';
import { validatorParams, validator } from '../../../middlewares/finByEmailValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.patch('/', validateToken(['Client']), validatorParams, validator, findAll);

export default router;