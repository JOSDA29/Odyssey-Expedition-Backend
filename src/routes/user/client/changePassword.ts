import express from 'express';
import changePasswordController from '../../../controllers/user/client/changePassword';
import { changePasswordValidator, handleValidation } from '../../../middlewares/updatePasswordValidator';
import validateToken from '../../../middlewares/validateTokenMiddleware';

const router = express.Router();

router.patch('/', validateToken(['Client']), changePasswordValidator, handleValidation, changePasswordController);

export default router;