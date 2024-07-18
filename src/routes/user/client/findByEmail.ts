import express, { Router } from 'express';
import Find from '../../../controllers/user/client/findByEmail';
const router = express.Router();

router.get('/', Find);

export default router;  