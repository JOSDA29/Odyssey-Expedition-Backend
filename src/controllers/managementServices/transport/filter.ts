import { Request, Response } from "express";
import FilterTransportDTO from "../../../DTO/managementServices/transport/FilterTransportDTO";
import FilterTransportService from "../../../services/managementServices/transport/filter";

const filterTransport = async (req: Request, res: Response) => {
    try {
        const {
            transportID,
            transportType,
            origin,
            destination,
            arrivalDate,
            departureDate,
            state
        } = req.query;

        const filterTransportDTO = new FilterTransportDTO(
            transportID ? String(transportID) : undefined,
            transportType ? String(transportType) : undefined,
            origin ? String(origin) : undefined,
            destination ? String(destination) : undefined,
            arrivalDate? new Date(arrivalDate as string) : undefined,
            departureDate ? new Date(departureDate as string) : undefined,
            state ? state === 'true' : undefined
        );

        const result = await FilterTransportService.filterTransport(filterTransportDTO);
        
        if (result.success && Array.isArray(result.data)) {
            if (result.data.length > 0) {
                return res.status(200).json(result.data);
            } else {
                return res.status(404).json({ message: 'No transports found matching the criteria.' });
            }
        } else {
            return res.status(400).json({ message: result.message || 'An unknown error occurred.' });
        }

    } catch (error) {
        return res.status(500).json({ message: `An error occurred: ${(error as Error).message}` });
    }
};

export default filterTransport;
