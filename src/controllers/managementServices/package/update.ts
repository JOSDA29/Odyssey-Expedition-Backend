import { Request, Response } from "express";
import updateService from '../../../services/managementServices/package/update';
import PackageDTO from '../../../DTO/managementServices/package/updateDTO';

const Update = async (req: Request, res: Response) => {
    try {
        const {
        id,
        origin,
        destination,
        departureDate,
        returnDate,
        numberOfPeople,
        itinerary,
        packageServices,
        customerPreferences,
        state,
        fkHotelID,
        fkTransportID,
        status,
        totalPrice,
        tokenEmail,
        } = req.body;

        const result = await updateService.update(new PackageDTO(id, origin, destination, departureDate, returnDate, numberOfPeople, itinerary, packageServices, customerPreferences, state, fkHotelID, fkTransportID, status, totalPrice, tokenEmail));

        if(result.success){
            return res.status(201).json({message: result.message});
        }
        return res.status(400).json({ message: result.message });
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default Update;