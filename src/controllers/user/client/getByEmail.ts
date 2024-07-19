import { Request, Response } from "express"
import getService from "../../../services/client/getByEmail";

let getByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        const client = await getService.getByEmail(email);

        if (client) {
            console.log(client);
            return res.status(202).json(client);
        }

        return res.status(401).json({
            status: 'Error'
        });

    } catch (error: any) {
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else if (error) {
            return res.status(500).json({ errorInfo: error.message });
        }
    }
}

export default getByEmail;
