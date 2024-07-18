import { Request, Response } from "express"
import findService from "../../../services/client/FindByEmail";

let findByEmail = async (req: Request, res: Response) => {
    try{
        const {
            email
        } = req.body

        const client = await findService.findByEmail(email);

        if(client){
            return res.status(202).json({
                client
            })
        }
        return res.status(401).json({
            status: 'Error'
        })

    } catch (error: any) {
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }

}

export default findByEmail;