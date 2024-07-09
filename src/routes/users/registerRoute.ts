import express, { Router } from 'express';
// import { validatorParams, validator } from '../../middlewares/registerValidator';
import register from '../../controllers/users/registerController';
const router = express.Router();

router.post('/', register);

export default router;  