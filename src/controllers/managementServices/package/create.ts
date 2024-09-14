import { Request, Response } from "express";
import PackageService from "../../../services/managementServices/package/create";
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

        const packageData = new PackageDTO(
            origin,
            destination,
            departureDate,
            returnDate,
            numberOfPeople,
            itinerary,
            customerPreferences,
            state,
            tokenEmail
        );

        const result = await PackageService.createPackage(packageData);

        return res.status(result.state).json({ message: result.message, packageId: result.packageId });
    } catch (error: any) {
        console.error('Internal Server Error:', error.message);
        return res.status(500).json({
            error: 'Internal Server Error',
            errorInfo: error.message,
        });
    }
}

export default create;
