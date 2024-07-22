import { Request, Response } from "express";
import getService from "../../../services/adviser/getByEmail";

let getByEmail = async (req: Request, res: Response) => {
    try {

        const { email, tokenRole, tokenEmail} = req.body;
        let administrator:any =[];

        if (tokenRole == 'Adviser') {
            administrator = await getService.getByEmail(tokenEmail);
        }else{
            administrator = await getService.getByEmail(email);
        }


        if (administrator !== null && administrator.length>0) {
            return res.status(202).json(administrator);
        }

        return res.status(404).json({
            status: 'Data not found'
        });

    } catch (error: any) {
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
};

export default getByEmail;
