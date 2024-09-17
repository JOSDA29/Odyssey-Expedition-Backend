import { Request, Response } from "express";
import AddHotelService from "../../../services/managementServices/package/addHotel";

const addHotel = async (req: Request, res: Response) => {
    try {
        const {
            idPackage,
            idHotel,
        } = req.body;
        
        const result = await AddHotelService.addHotel(idPackage, idHotel);

        return res.status(200).json({
            success: true,
            message: 'hotel successfully added'
        });
        
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default addHotel;