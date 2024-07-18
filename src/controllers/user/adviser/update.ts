import { Request, Response } from "express";
import updateDataAd from "../../../repository/user/adviser/updateData";
import User from "../../../DTO/updateDTO";

let update = async(req: Request, res: Response) => {
    try {
        const {
            id,
            names,
            lastnames,
            phone,
            image,
            idAdministrator
        } = req.body

        const adviser = await updateDataAd.update(new User(id, names, lastnames, phone, image, idAdministrator));

        if(adviser){
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