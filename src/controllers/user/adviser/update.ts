import { Request, Response } from "express";
import updateDataAd from "../../../repository/user/adviser/updateData";
import User from "../../../DTO/userDTO";

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

        const adviser = await updateDataAd.updateAdviser(new User(id, names, lastnames, phone, image, idAdministrator));
        
    } catch (error) {
        return res.status(500).send({ errorInfo: "Internal Server Error", error });
    }
}

export default update;