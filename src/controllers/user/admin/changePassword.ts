import { Request, Response } from "express";
import ChangePassword from "../../../DTO/changePasswordDTO";
import Admin from "../../../services/admin/admin";

let changePassword = async(req: Request, res: Response) => {
    try{
        const {
            id, 
            oldPassword,
            newPassword
        } = req.body

        const admin = await Admin.changePassword(new ChangePassword(id, oldPassword, newPassword));
        if(admin){
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