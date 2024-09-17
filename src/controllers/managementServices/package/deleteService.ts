import { Request, Response } from "express";
import deleteServiceS from "../../../services/managementServices/package/deleteService";

const deleteService = async (req: Request, res: Response) => {
    try {
        const {
            idPackage,
            idHotel,
            idTransport
        } = req.body;
        
        const result = await deleteServiceS.deleteService(idPackage, idHotel, idTransport)

        return res.status(200).json({
            success: true,
            message: 'Service successfully deleted'
        });
        
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default deleteService;