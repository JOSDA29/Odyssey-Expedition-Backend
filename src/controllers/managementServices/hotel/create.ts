import { Request, Response } from "express";
import createService from '../../../services/managementServices/hotel/create';
import HotelDTO from "../../../DTO/managementServices/hotel/hotelDTO";

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
            price,
            tokenEmail,
            state,
        } = req.body;

        const result = await createService.create(new HotelDTO(name, destination, startDate, endDate, numberOfPeople, room, description, location, hotelServices, price, tokenEmail, state));

        if(result != null){
          return res.status(201).json({
                status: 'Register Hotel Successfully',
                idHotel: result
            });
        }
        return res.status(400).json({
            status: 'Bad Request'   
        })

    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default create;