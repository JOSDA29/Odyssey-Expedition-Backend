import { Request, Response } from "express";
import CreateTransportService from "../../../services/managementServices/transport/create";
import TransportDTO from "../../../DTO/managementServices/transport/TransportDTO";

const createTransport = async (req: Request, res: Response) => {
    try {
        const {
            transportID,
            transporttype,
            company,
            origin,
            destination,
            arrivalDate,
            departureDate,
            numberOfPeople,
            price,
            state,
            trackNumber,
            tokenEmail
        } = req.body;
        

        // Initialize transport object using DTO
        const transport = new TransportDTO(
            transportID,
            transporttype,
            company,
            origin,
            destination,
            arrivalDate,
            departureDate,
            numberOfPeople,
            price,
            state ?? true,
            trackNumber ?? null,
            tokenEmail
        );

        const result = await CreateTransportService.createTransport(transport);

        if (result) {
            return res.status(201).json({ message: 'Transport Created Successfully' });
        } else {
            return res.status(400).json({ message: 'Bad Request' });
        }

    } catch (error) {
        console.error('Error creating transport:', error);
        return res.status(500).json({ message: 'An error occurred, error information: ' + (error as Error).message });
    }
};

export default createTransport;
