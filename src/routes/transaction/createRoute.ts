import express from 'express';
import createTransactionController from '../../controllers/transaction/createController';
import validateToken from '../../middlewares/validateTokenMiddleware';
import { validatorParamsTransaction, validatorTransaction } from '../../middlewares/routes validators/transaction/createTransactionValidator';

const router = express.Router();

router.post('/create', validateToken(['Client']), validatorParamsTransaction, validatorTransaction, createTransactionController);

export default router;