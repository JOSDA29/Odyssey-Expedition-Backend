import express from 'express';
import registerController from '../../controllers/advisor/registerController';
import validateToken from '../../middlewares/verifyToken';
import { validator, validatorParams } from '../../middlewares/registerValidator';

const router = express.Router();

router.post('/', validateToken,validatorParams, validator, registerController);

export default router;