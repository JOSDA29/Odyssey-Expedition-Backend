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
            transportID as string ?? null,
            transportType as string ?? null,
            origin as string ?? null,
            destination as string ?? null,
            arrivalDate as string ?? null,
            departureDate as string ?? null,
            state ? Boolean(state) : undefined
        );

        const result = await FilterTransportService.filterTransport(filterTransportDTO);
        
        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({ message: `An error occurred: ${(error as Error).message}` });
    }
};

export default filterTransport;
