import express from 'express';
import createTransactionController from '../../controllers/transaction/createController';
import UpdateController from '../../controllers/transaction/updateController';
import validateToken from '../../middlewares/validateTokenMiddleware';
import { validatorParamsTransaction, validatorTransaction } from '../../middlewares/routes validators/transaction/createTransactionValidator';

const router = express.Router();

router.post('/create', createTransactionController);
router.put('/update', validateToken(['Client']), UpdateController);


export default router;