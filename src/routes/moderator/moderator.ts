import PerspectiveController from '../../controllers/moderator/moderator';
import express from 'express';
const router = express.Router();

const controller = new PerspectiveController();

router.post('/', controller.analyzeComment.bind(controller));

export default router;
