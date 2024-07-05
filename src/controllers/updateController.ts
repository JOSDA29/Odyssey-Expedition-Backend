import { Request, Response } from "express";
import User from "../DTO/userDTO";
import updateService from "../services/UpdateService";

let update = async (req: Request, res: Response) => {
    try {
        const {
            id,
            names,
            lastnames,
            email,
            password,
            phone,
            image
        } = req.body;

        const role = req.body.role;

        const user = await updateService.updateUser(new User(id, names, lastnames, email, password, phone, image), role);
        
        

        if(user){
            return res.status(200).json({
                status: 'Succesful Update'
            });
        }

        return res.status(401).json({
            status: 'Invalid Data'
        })
        
    } catch (error) {
        return res.status(500).send({ errorInfo: "Internal Server Error", error });
    }
}

export default update;