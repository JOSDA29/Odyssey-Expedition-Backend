import { Request, Response } from "express";
import getService from "../../../services/client/getAll";

const getAll = async (req: Request, res: Response) => {
    try {
        const clients = await getService.getAll();

        if (clients) {
            return res.status(200).json(clients);
        } else {
            return res.status(404).json({ status: 'No clients found' });
        }
    } catch (error: any) {
        return res.status(500).json({ status: 'Error', message: error.message });
    }
}

export default getAll;
