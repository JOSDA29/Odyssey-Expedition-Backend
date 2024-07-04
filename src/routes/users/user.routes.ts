import express, { Router } from 'express';
import register from '../../controllers/users/register-controller';
const router = express.Router();

router.post('/', register);

export default router;  