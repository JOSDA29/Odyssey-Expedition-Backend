import { Request, Response } from 'express';
import UserDto from '../../DTO/user/userDto';
import RegisterService from '../../services/users/registerService';

let register = async (req: Request, res: Response) => {
    try {
        const {
            id_client,
            name,
            lastName,
            email,
            password,
            phoneNumber,
            image
        } = req.body;
        
        const registerUser = await RegisterService.register(new UserDto(id_client, name, lastName, email, password, phoneNumber, image));
        
        return res.status(201).json(
            {status: "register ok"}
        )
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({errorInfo: error.sqlMessage});
        }else if (error){
            return res.status(500).json({errorInfo: error.message});
        }
    }
}
export default register;