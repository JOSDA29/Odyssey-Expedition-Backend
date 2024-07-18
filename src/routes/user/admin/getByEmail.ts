import express from 'express';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.get('', validateToken);

export default router;