import { Response, Request } from "express";
import getAllService from '../../../services/managementServices/hotel/getAll';

const GetAll = async (req: Request, res: Response) => {
    try {
        const { tokenEmail } = req.body;
        const result = await getAllService.getAll();
        if(result){
            return res.status(200).json(result);
        }
        return res.status(404).json({ status: 'Data not found' });   
    } catch (error: any) {
        return res
            .status(500)
            .json({ status: 'Error', message: error.message });
    }
}

export default GetAll;