import { Request, Response } from "express";
import addIdService from "../../../services/user/client/addId";

const addId = async (req: Request, res: Response) => {
    try{
        const {tokenEmail, id} = req.body;
        const result = await addIdService.addID(tokenEmail, id);

        if(result){
           return res.status(201).json({
                status: 'Id agregado Correctamente :)'
            });
        }
        
        return res.status(400).json({
            status: 'Bad Request'
        });
        
    } catch (error: any) {
        if (error.code === "23505") {      
          return res.status(409).json({ error: "Client already exists", details: error.sqlMessage });
        }
    
        return res.status(500).json({ error: "Internal server error", details: error.message });
      }
}

export default addId;