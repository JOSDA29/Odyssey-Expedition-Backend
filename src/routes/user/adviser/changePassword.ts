import express from 'express';
import { changePasswordValidator, handleValidation } from '../../../middlewares/updatePasswordValidator';
import changePasswordController from '../../../controllers/user/adviser/changePassword';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.patch('/', validateToken(['Adviser']), changePasswordValidator, handleValidation, changePasswordController);

export default router;