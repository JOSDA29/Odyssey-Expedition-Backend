import { Request, Response } from 'express';
import ChangePassword from '../../../DTO/changePasswordDTO';
import Admin from '../../../services/admin/adminUpdate';

let changePassword = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, oldPassword, newPassword } = req.body;

        const result = await Admin.changePassword(
            new ChangePassword(tokenEmail, oldPassword, newPassword),
        );
        switch (result.message) {
            case 'Password Update Succesful':
                return res.status(202).json({ status: result.message });
            case 'Incorrect Old Password':
                return res.status(401).json({ status: result.message });
            default:
                break;
        }

        return res.status(404).json({
            status: result.message,
        });
    } catch (error) {
        return res
            .status(500)
            .send({ errorInfo: 'Internal Server Error', error });
    }
};

export default changePassword;
