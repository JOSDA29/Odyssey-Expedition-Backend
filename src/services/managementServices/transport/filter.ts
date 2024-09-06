import FilterTransportRepository from "../../../repository/managementServices/transport/filter";
import FilterTransportDTO from "../../../DTO/managementServices/transport/FilterTransportDTO";

class FilterTransport {
    static async filterTransport(filterTransportDTO: FilterTransportDTO){

        if (filterTransportDTO.departureDate && filterTransportDTO.arrivalDate && filterTransportDTO.departureDate > filterTransportDTO.arrivalDate) {
            throw new Error("The departure date cannot be later than the return date.");
        }

        try {
            const results = await FilterTransportRepository.filterTransport(filterTransportDTO);

            if (results.length === 0) {
                return { success: true, message: 'No Transports found matching the criteria.' };
            }

            return { success: true, data: results };
        } catch (error) {
            console.error('Error filtering transports:', error);
            throw new Error('Internal error when trying to filter transports.');
        }
    }
}

export default FilterTransport;