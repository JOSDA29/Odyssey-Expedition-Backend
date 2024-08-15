import express from 'express';
import createTransport from "../../../controllers/managementServices/transport/create";
import validateToken from "../../../middlewares/validateTokenMiddleware";
const router = express.Router();

router.post('/create', validateToken(['Adviser']),  createTransport);

export default router;