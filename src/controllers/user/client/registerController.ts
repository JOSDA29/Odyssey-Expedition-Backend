import { Request, Response } from 'express';
import UserDto from '../../../DTO/user/userDto';
import RegisterService from '../../../services/client/registerService';
import { sendEmail } from '../../../services/emailService';

const register = async (req: Request, res: Response) => {
    try {
        const { name, lastName, email, password, phoneNumber, image } =
            req.body;

        const result = await RegisterService.register(
            new UserDto(name, lastName, email, password, phoneNumber, image),
        );

        if (!result.success) {
            return res.status(409).json({
                status: result.message,
            });
        }

        if(result){
            await sendEmail(email, "Registro exitoso", `Hola ${name}, te damos la bienvenida a Odyssey Expedition.`);
            return res.status(201).json({
                status: 'register ok',
            });
        }
    } catch (error: any) {
        if (error && error.code === 'ER_DUP_ENTRY') {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default register;
