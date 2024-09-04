import { Request, Response } from "express";

const deleteService = async (req: Request, res: Response) => {
    try {
        const {
            idPackage,
            idHotel,
            idTransport
        } = req.query;
        
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default deleteService;