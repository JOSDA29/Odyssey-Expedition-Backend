import { Request, Response } from "express";
import UpdateTransportService from "../../../services/managementServices/transport/update";
import UpdateTransportDTO from "../../../DTO/managementServices/transport/UpdateTransportDTO";

const updateTransport = async (req: Request, res: Response) => {
    try {
        const {
            transportID,
            origin,
            destination,
            arrivalDate,
            departureDate,
            numberOfPeople,
            price,
            trackNumber,
            state
        } = req.body;

        const updateTransportDTO = new UpdateTransportDTO(
            transportID,
            origin,
            destination,
            arrivalDate,
            departureDate,
            numberOfPeople,
            price,
            trackNumber,
            state
        );

        const result = await UpdateTransportService.updateTransport(updateTransportDTO);

        if (result) {
            return res.status(200).json({ message: "Transport updated successfully" });
        } else {
            return res.status(404).json({ message: "Transport not found" });
        }

    } catch (error) {
        console.error('Error updating transport:', error);
        return res.status(500).json({ message: 'An error occurred, error information: ' + (error as Error).message });
    }
}

export default updateTransport;