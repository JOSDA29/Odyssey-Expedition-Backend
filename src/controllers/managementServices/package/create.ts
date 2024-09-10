import { Request, Response } from "express";
import packageService from "../../../services/managementServices/package/create";
import PackageDTO from "../../../DTO/managementServices/package/packageDTO";

const create = async (req: Request, res: Response) => {
    try {
        const {
            origin,
            destination,
            departureDate,
            returnDate,
            numberOfPeople,
            itinerary,
            customerPreferences,
            state,
            tokenEmail,
        } = req.body;
        
        const result = await packageService.package(new PackageDTO(origin, destination,departureDate, returnDate, numberOfPeople, itinerary, customerPreferences, state, tokenEmail));

        if(result.success){ 
            return res.status(200).json({
                message: result.message
            });
        }

        return res.status(400).json({
            message: result.message
        });
        
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default create;