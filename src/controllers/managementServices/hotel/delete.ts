import { Request, Response } from "express";
import DeleteService from '../../../services/managementServices/hotel/delete';

const Delete = async (req: Request, res: Response) => {
    try {
        const { tokenEmail } = req.body;
        const id = req.params.id;
        const idHotel: number = parseInt(id, 10);
        
        const result = await DeleteService.delete(idHotel, tokenEmail);
        if(result.message === 'Hotel Deleted Successfully'){
            return res.status(200).json({message: result.message});
        }
        return res.status(404).json({ status: result.message});
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default Delete;