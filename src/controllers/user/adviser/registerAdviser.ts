import { Request, Response } from 'express';
import RegisterService from '../../../services/user/adviser/registerAdviser';
import UserDto from '../../../DTO/user/userDto';

const register = async (req: Request, res: Response) => {
    try {
        const { id, name, lastName, email, password, phoneNumber, tokenEmail } =
            req.body;

        const result = await RegisterService.register(
            new UserDto(
                name,
                lastName,
                email,
                password,
                phoneNumber,
                id,
                tokenEmail,
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
        if (error && error.code === '23505') {
            return res.status(409).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default register;
