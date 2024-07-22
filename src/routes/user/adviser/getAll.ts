import express, { Router } from 'express';
import validateToken from '../../../middlewares/validateTokenMiddleware';
import getAllController from '../../../controllers/user/adviser/getAll';

const router = express.Router();

router.get('/', validateToken(['Administrator']), getAllController);

export default router;