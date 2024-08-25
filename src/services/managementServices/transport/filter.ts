import FilterTransportRepository from "../../../repository/managementServices/transport/filter";
import FilterTransportDTO from "../../../DTO/managementServices/transport/FilterTransportDTO";

class FilterTransport {
    static async filterTransport(filterTransportDTO: FilterTransportDTO){
        const result = await FilterTransportRepository.filterTransport(filterTransportDTO);
        return result;
    }
}

export default FilterTransport;