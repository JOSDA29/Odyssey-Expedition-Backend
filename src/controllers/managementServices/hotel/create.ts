import { Request, Response } from "express";
import createService from '../../../services/managementServices/hotel/create';
import HotelDTO from "../../../DTO/managementServices/hotelDTO";

const create = async (req: Request, res: Response) => {
    try {
        const {
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
            price,
            tokenEmail
        } = req.body;

        const result = await createService.create(new HotelDTO(name, destination, startDate, endDate, numberOfPeople, room, description, location, hotelServices, state, price, tokenEmail));

        if(result){
            res.status(202).json({
                status: 'Register Hotel Successfully'
            });
        }

    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default create;