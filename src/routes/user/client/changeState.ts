import express from 'express';
import changeStateController from '../../../controllers/user/client/changeState';
import { changeStateValidator, validator } from '../../../middlewares/changeStateValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.put('/', validateToken(['Client']), changeStateValidator, validator, changeStateController);

export default router;