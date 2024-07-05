import express from 'express';
import update from '../controllers/updateController';
import validateToken from '../middlewares/validateTokenMiddleware';
import { validsParameters, validator } from '../middlewares/updateValidator';

const router = express.Router();

router.patch('/', validateToken, validsParameters, validator, update);

export default router;