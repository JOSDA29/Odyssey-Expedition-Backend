import { Request, Response } from "express";
import FilterService from "../../../services/managementServices/hotel/filter";
import filterDTO from "../../../DTO/managementServices/filterDTO";

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
        } = req.body

        const result = await FilterService.filter(new filterDTO(id, name, destination, startDate, endDate, numberOfPeople, room, description, location, hotelServices, state, priceMin, priceMax));

        if(result){
            return res.status(200).json(result);
        }
        return res.status(402).json({
            status: 'Bad Request'
        });
    }catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default Filter;