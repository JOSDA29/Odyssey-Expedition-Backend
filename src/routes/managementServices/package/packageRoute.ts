import express from 'express';
import validateToken from '../../../middlewares/validateTokenMiddleware';
import { validatorParamsPackage, validator } from '../../../middlewares/routes validators/package/createValidator';
import createController from '../../../controllers/managementServices/package/create';

const router = express.Router();

router.post('/create', validateToken(['Adviser']),  validatorParamsPackage, validator, createController);


export default router;