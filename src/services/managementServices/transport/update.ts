import UpdateTransportDTO from "../../../DTO/managementServices/transport/UpdateTransportDTO";
import UpdateTransportRepository from "../../../repository/managementServices/transport/update";

class UpdateTransport {
    static async updateTransport(updateTransportDTO: UpdateTransportDTO) {
        const result = await UpdateTransportRepository.updateTransport(updateTransportDTO);        

        if (result > 0) {
            return true;
        } 
        
        return false;
    }
}

export default UpdateTransport;