import { Request, Response } from 'express';
import UserDto from '../../DTO/user/user-dto';
import UserService from '../../services/users/user.service';

let register = async (req: Request, res: Response) => {
    try {
        const {
            id_client,
            email,
            password,
            name,
            lastName,
            phoneNumber,
            image
        } = req.body;
        console.log(req.body);
        
        const registerUser = await UserService.register(new UserDto(id_client, email, password, name, lastName, phoneNumber, image));
        console.log(registerUser);
        
        return res.status(201).json(
            {status: "register ok"}
        )
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({errorInfo: error.sqlMessage});
        }
    }
}
export default register;