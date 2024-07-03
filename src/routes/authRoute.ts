import express from 'express';
import auth from '../controllers/authController';
import { validatorParams, validator } from '../middlewares/authValidator';

const router = express.Router();

router.post('/auth', validatorParams, validator, auth);

export default router;