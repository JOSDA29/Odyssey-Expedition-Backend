import express, { Router } from 'express';
import { validatorParams, validator } from '../../middlewares/registerValidator';
import register from '../../controllers/users/registerController';
const router = express.Router();

router.post('/',validatorParams, validator, register);

export default router;  