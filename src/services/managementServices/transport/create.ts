import TransportDTO from "../../../DTO/managementServices/transport/TransportDTO";
import CreateTrasnportRepository from "../../../repository/managementServices/transport/create";

class CreateTransport {
    static async createTransport(transport: TransportDTO){
        const result = await CreateTrasnportRepository.createTransport(transport);
        return result;
    }
}

export default CreateTransport;