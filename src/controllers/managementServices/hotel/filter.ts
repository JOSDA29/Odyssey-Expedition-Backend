import { Request, Response } from "express";
import FilterService from "../../../services/managementServices/hotel/filter";
import filterDTO from "../../../DTO/managementServices/hotel/filterDTO";

const Filter = async (req: Request, res: Response) => {
    try {
        const {
            id,
            name,
            location,
            state
        } = req.query;
        
        const filterData = new filterDTO(
            id ? Number(id) : undefined,
            name ? String(name) : undefined,
            location ? String(location) : undefined,
            state === 'true' ? true : state === 'false' ? false : undefined,
        );
        
        const result = await FilterService.filter(filterData);

        if (result.success && Array.isArray(result.data)) {
            if (result.data.length > 0) {
                return res.status(202).json(result.data);
            }
            return res.status(202).json(result.data); 
        }  
    } catch (error: any) {
        return res.status(500).json({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default Filter;
