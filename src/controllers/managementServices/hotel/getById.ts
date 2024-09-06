import { Request, Response } from "express";
import GetByIdService from "../../../services/managementServices/hotel/getById";

const GetById = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const idHotel: number = parseInt(id, 10);

        const result = await GetByIdService.getById(idHotel);
        if(result.length > 0){
           return res.status(202).json(result);
        }
        return res.status(402).json({
            status: 'No se encontraron resultados'
        });
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
} 

export default GetById;