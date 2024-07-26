import { Request, Response } from 'express';
import RegisterService from '../../../services/adviser/registerAdviser';
import UserDto from '../../../DTO/user/userDto';

const register = async (req: Request, res: Response) => {
    try {
        const {
            id,
            name,
            lastName,
            email,
            password,
            phoneNumber,
            email_Admin,
        } = req.body;

        const result = await RegisterService.register(
            new UserDto(
                name,
                lastName,
                email,
                password,
                phoneNumber,
                id,
                email_Admin,
            ),
        );

        if (!result.success) {
            return res.status(409).json({
                status: result.message,
            });
        }

        return res.status(201).json({
            status: 'register ok',
        });
    } catch (error: any) {
        if (error && error.code === 'ER_DUP_ENTRY') {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default register;
