import { Request, Response } from "express";
import updateService from "../../../services/client/client";
import User from "../../../DTO/updateDTO";

let update = async(req: Request, res: Response) => {
    try {
        const {
            id,
            names,
            lastnames,
            phone,
            image,
        } = req.body

        const client = await updateService.updateC(new User(id, names, lastnames, phone, image));

        if(client){
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