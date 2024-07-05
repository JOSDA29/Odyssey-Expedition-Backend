import express, { Router } from 'express';
import register from '../../controllers/users/registerController';
const router = express.Router();

router.post('/', register);

export default router;  