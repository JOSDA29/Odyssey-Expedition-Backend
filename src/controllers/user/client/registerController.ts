import { Request, Response } from 'express';
import axios from 'axios';
import UserDto from '../../../DTO/user/userDto';
import RegisterService from '../../../services/user/client/registerService';

const register = async (req: Request, res: Response) => {
    try {
        const { name, lastName, email, password, phoneNumber } = req.body;

        const result = await RegisterService.register(
            new UserDto(name, lastName, email, password, phoneNumber),
        );

        if (!result.success) {
            return res.status(409).json({
                status: result.message,
            });
        }

        await axios.post('https://function-52897.azurewebsites.net/api/httptrigger1', {
            subject: "Bienvenido a Odyssey-Expedition",
            to: email,
            dataTemplate: { name: name },
            templateName: "registro.html"
        });

        return res.status(201).json({
            status: 'register ok',
        });
    } catch (error: any) {
        if (error && error.code === '23505') {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error && error.response) {
            return res.status(error.response.status).json({ errorInfo: error.response.data });
        } else {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default register;
