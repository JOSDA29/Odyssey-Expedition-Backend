import express from 'express';
import createTransport from "../../../controllers/managementServices/transport/create";
import updateTransport from '../../../controllers/managementServices/transport/update';
import validateToken from "../../../middlewares/validateTokenMiddleware";
import upload from '../../../middlewares/multerMiddleware';
import updateImage from '../../../controllers/managementServices/transport/updateImage';

const router = express.Router();

router.post('/create', validateToken(['Adviser']),  createTransport);

router.put('/update', validateToken(['Adviser']),  updateTransport);

router.put('/uploadImage', upload.single('file'), validateToken(['Adviser']), updateImage);


export default router;