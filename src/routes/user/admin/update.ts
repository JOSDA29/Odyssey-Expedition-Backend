import express from 'express';
import updateDataController from '../../../controllers/user/admin/update';
import {
    validsParameters,
    validator,
} from '../../../middlewares/updateValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.put(
    '/',
    validateToken(['Administrator']),
    validsParameters,
    validator,
    updateDataController,
);

export default router;
