import { Request, Response } from "express";
import updateDataA from "../../../repository/user/admin/updateData";
import User from "../../../DTO/userDTO";

let update = async(req: Request, res: Response) => {
    try {
        const {
            id,
            names,
            lastnames,
            phone,
            image,
        } = req.body

        const admin = await updateDataA.updateAdmin(new User(id, names, lastnames, phone, image));

        if(admin){
            return res.status(200).json({
                status: 'Successful Update'
            })
        }
        
        return res.status(401).json({ 
            status: 'Invalid email or password'
        });
        
    } catch (error) {
        return res.status(500).send({ errorInfo: "Internal Server Error", error });
    }
}

export default update;