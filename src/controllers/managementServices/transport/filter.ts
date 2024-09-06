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

        const stateParse = state === undefined ? undefined : (state === 'true' ? true : state === 'false' ? false : undefined);

        const filterTransportDTO = new FilterTransportDTO(
            (transportID as string) ?? null,
            (transportType as string) ?? null,
            (origin as string) ?? null,
            (destination as string) ?? null,
            arrivalDate? new Date(arrivalDate as string) : undefined,
            departureDate ? new Date(departureDate as string) : undefined,
            stateParse
        );

        const result = await FilterTransportService.filterTransport(filterTransportDTO);


        if (result.success) {
            return res.status(result.status).json(result.data);
        }

        return res.status(result.status).json({
            success: result.success,
            message: result.message
        });

    } catch (error) {
        return res.status(500).json({ message: `An error occurred: ${(error as Error).message}` });
    }
};

export default filterTransport;
