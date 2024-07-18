import { Request, Response } from "express";
import findService from "../../../services/client/findAll";

let findAll = async (req: Request, res: Response) => {

    const client = await findService.findAll();
     if(client){
            return res.status(202).json({
                status: 'Get all',
                client
            })
        }
        return res.status(401).json({
            status: 'Error'
        })
    }

    export default findAll