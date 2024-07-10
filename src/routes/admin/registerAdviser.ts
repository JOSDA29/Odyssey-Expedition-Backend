import express from 'express';
import registerController from '../../controllers/admin/registerAdviser';
import verifyTokenAdministrador from '../../middlewares/verifyToken/verifyTokenAdministrador';
import { validator, validatorParams } from '../../middlewares/registerValidator';

const router = express.Router();

router.post('/', verifyTokenAdministrador, validatorParams, validator, registerController);

export default router;