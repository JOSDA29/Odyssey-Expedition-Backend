import express from 'express';
import findAll from '../../../controllers/user/client/getAll';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.get('/', validateToken(['Adviser']), findAll);

export default router;
