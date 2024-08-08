import { Request, Response } from "express"
import updateHotel from "../../../services/managementServices/hotel/update";
import updateHotelDTO from "../../../DTO/managementServices/updateDTO";

const update = async (req: Request, res: Response) => {
    try {
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
            price,
            tokenEmail,
            state,
        } = req.body;

        const result = await updateHotel.update(new updateHotelDTO(id, name, destination, startDate, endDate, numberOfPeople, room, description, location, hotelServices, state, price, tokenEmail,));
        
        if(result! > 0){
            return res.status(200).json({
                status: 'Update Succesfully'
            });
        }

        return res.status(400).json({
            status: 'Bad Request'
        });
        
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default update;