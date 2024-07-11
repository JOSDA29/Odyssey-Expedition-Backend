import { Request, Response } from "express";
import ChangePassword from "../../../DTO/changePasswordDTO";
import Client from "../../../services/client/client";

let changePassword = async(req: Request , res: Response) => {
    try{
        const {
            id, 
            oldPassword,
            newPassword
        } = req.body

        const client = await Client.changePassword(new ChangePassword(id, oldPassword, newPassword));
        if(client){
            return res.status(202).json({
                status: 'Password Update Succesful'
            })
        }
        return res.status(401).json({
            status: 'Password Invalid'
        })
    }  catch (error) {
        return res.status(500).send({ errorInfo: "Internal Server Error", error });
    }
}

export default changePassword;