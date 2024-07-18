import express, { Router } from 'express';
import findAll from '../../../controllers/user/client/FindAll';
const router = express.Router();

router.get('/', findAll);

export default router; 