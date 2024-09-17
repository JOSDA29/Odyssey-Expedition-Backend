import express from 'express';
import googleController from '../controllers/google/googleProtectedController';

const router = express.Router();

router.post('/', googleController);

export default router;