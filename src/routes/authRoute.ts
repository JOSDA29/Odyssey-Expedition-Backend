import express from 'express';
import auth from '../controllers/authController';
import { validatorParams, validator } from '../middlewares/routes validators/authValidator';

const router = express.Router();

router.post('/', validatorParams, validator, auth);

export default router;
