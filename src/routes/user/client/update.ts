import express from 'express';
import updateDataController from '../../../controllers/user/client/update';
import {
    validsParameters,
    validator,
} from '../../../middlewares/updateValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.put(
    '/',
    validateToken(['Client']),
    validsParameters,
    validator,
    updateDataController,
);

export default router;
