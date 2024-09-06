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
            state ? state === 'true' : undefined,
            departureDate ? new Date(departureDate as string) : undefined,
            returnDate ? new Date(returnDate as string) : undefined
        );

        const result = await filterService.filter(filterData);

        if (result.success && Array.isArray(result.data)) {
            if (result.data.length > 0) {
                return res.status(200).json(result.data);
            } else {
                return res.status(404).json({ message: 'No packages found matching the criteria.' });
            }
        } else {
            return res.status(400).json({ message: result.message || 'An unknown error occurred.' });
        }

    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default Filter;
