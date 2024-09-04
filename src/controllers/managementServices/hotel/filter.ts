import { Request, Response } from "express";
import FilterService from "../../../services/managementServices/hotel/filter";
import filterDTO from "../../../DTO/managementServices/hotel/filterDTO";

const Filter = async (req: Request, res: Response) => {
    try{
        const {
            id,
            name,
            destination,
            startDate,
            endDate,
            numberOfPeople,
            room,
            description,
            location,
            hotelServices,
            state,
            priceMin,
            priceMax,
        } = req.query;
        
        const filterData = new filterDTO(
            id ? Number(id) : undefined,
            name ? String(name) : undefined,
            destination ? String(destination) : undefined,
            startDate ? new Date(startDate as string) : undefined,
            endDate ? new Date(endDate as string) : undefined,
            numberOfPeople ? Number(numberOfPeople) : undefined,
            room ? String(room) : undefined,
            description ? String(description) : undefined,
            location ? String(location) : undefined,
            hotelServices ? String(hotelServices) : undefined,
            state ? state == 'true' : undefined,
            priceMin ? Number(priceMin) : undefined,
            priceMax ? Number(priceMax) : undefined
        );
        
        const result = await FilterService.filter(filterData);
        
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: 'No se encontraron resultados' });
        }
    }catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default Filter;