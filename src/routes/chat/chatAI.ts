import { chatController } from '../../controllers/chat/chat';
import express from 'express';
const router = express.Router();

router.post('/', chatController);

export default router;
