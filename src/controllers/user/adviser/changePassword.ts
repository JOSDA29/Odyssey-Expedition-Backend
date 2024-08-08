import { Request, Response } from 'express';
import ChangePassword from '../../../DTO/changePasswordDTO';
import Adviser from '../../../services/user/adviser/adviserUpdate';

let changePassword = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, oldPassword, newPassword } = req.body;

        const adviser = await Adviser.changePassword(
            new ChangePassword(tokenEmail, oldPassword, newPassword),
        );
        switch (adviser.message) {
            case 'Password Update Succesful':
                return res.status(200).json({ status: adviser.message });
            case 'Incorrect Old Password':
                return res.status(401).json({ status: adviser.message });
            default:
                break;
        }

        return res.status(404).json({
            status: adviser.message,
        });
    } catch (error) {
        return res
            .status(500)
            .send({ errorInfo: 'Internal Server Error', error });
    }
};

export default changePassword;
