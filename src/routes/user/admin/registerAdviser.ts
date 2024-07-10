import express from 'express';
import registerController from '../../../controllers/user/admin/registerAdviser';
import { validator, validatorParams } from '../../../middlewares/registerValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';


const router = express.Router();

router.post('/', validateToken(['Administrator']), validatorParams, validator, registerController);

export default router;