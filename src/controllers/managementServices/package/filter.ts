import { Request, Response } from "express";
import filterService from '../../../services/managementServices/package/filter';
import filterDTO from '../../../DTO/managementServices/package/FilterDTO';

const Filter = async (req: Request, res: Response) => {
    try {
        const {
            id,
            origin,
            destination,
            state,
            departureDate,
            returnDate,
        } = req.query;

        const filterData = new filterDTO(
            id ? Number(id) : undefined,
            origin ? String(origin): undefined,
            destination ? String(destination) : undefined,
            state === 'true' ? true : state === 'false' ? false : undefined,
            departureDate ? new Date(departureDate as string) : undefined,
            returnDate ? new Date(returnDate as string) : undefined
        );

        const result = await filterService.filter(filterData);

        if (result.success && Array.isArray(result.data)) {
            return res.status(result.status).json(result.data); 
        } 

        return res.status(result.status).json({ success: result.success, message: 'Bad Request' + result.menssage}); 

         
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default Filter;
