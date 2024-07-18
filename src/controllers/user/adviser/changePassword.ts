import { Request, Response } from "express";
import ChangePassword from "../../../DTO/changePasswordDTO";
import Adviser from "../../../services/adviser/adviser";

let changePassword = async(req: Request , res: Response) => {
    try{
        const {
            email, 
            oldPassword,
            newPassword
        } = req.body

        const adviser = await Adviser.changePassword(new ChangePassword(email, oldPassword, newPassword));
        if(adviser){
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