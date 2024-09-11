import { Request, Response } from "express";
import AddTransportService from "../../../services/managementServices/package/addTransport";

const addTransport = async (req: Request, res: Response) => {
    try {
        const {
            idPackage,
            idTransport,
            numberOfPeople
        } = req.body;
        
        const result = await AddTransportService.addTransport(idTransport, idPackage, numberOfPeople);

        return res.status(200).json({
            success: true,
            message: 'transport successfully added'
        });
        
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default addTransport;