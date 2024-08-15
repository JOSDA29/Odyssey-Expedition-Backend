import express from 'express';
import createTransport from "../../../controllers/managementServices/transport/create";
import updateTransport from '../../../controllers/managementServices/transport/update';
import validateToken from "../../../middlewares/validateTokenMiddleware";
const router = express.Router();

router.post('/create', validateToken(['Adviser']),  createTransport);

router.put('/update', validateToken(['Adviser']),  updateTransport);

export default router;