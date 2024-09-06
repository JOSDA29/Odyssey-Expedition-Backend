import FilterTransportRepository from "../../../repository/managementServices/transport/filter";
import FilterTransportDTO from "../../../DTO/managementServices/transport/FilterTransportDTO";

class FilterTransport {
    static async filterTransport(filterTransportDTO: FilterTransportDTO){

        if (filterTransportDTO.departureDate && filterTransportDTO.arrivalDate && filterTransportDTO.departureDate > filterTransportDTO.arrivalDate) {
                return { success: false, message: 'The departure date cannot be later than the return date.', status: 400 };
        }

        try {
            const results = await FilterTransportRepository.filterTransport(filterTransportDTO);
            return { success: true, data: results, status: 200 };
        } catch (error) {
            console.error('Error filtering transports:', error);
            throw new Error('Internal error when trying to filter transports.');
        }
    }
}

export default FilterTransport;