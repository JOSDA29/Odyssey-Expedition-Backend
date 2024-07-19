import express, { Router } from 'express';
import findAll from '../../../controllers/user/client/getAll';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.get('/', validateToken(['Client', 'Adviser', 'Administrator']), findAll);

export default router;