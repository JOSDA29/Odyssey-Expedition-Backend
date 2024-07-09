import { Request, Response } from "express";
import AdvisorService from "../../services/advisor/advisorServices";
import UserDto from "../../DTO/user/userDto";
 

let register = async (req: Request, res: Response) => {
    try {
        const {
            id,
            name,
            lastName,
            email,
            password,
            phoneNumber,
            image,
            id_Admin
        } = req.body;

        console.log(req.body);
        

        const registerAdvisor = await AdvisorService.register(new UserDto(id, name, lastName, email, password, phoneNumber, image, id_Admin));
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