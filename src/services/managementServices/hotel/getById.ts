import GetByIdRepository from "../../../repository/managementServices/hotel/getById"
class GetById {
    static async getById(id: number){
        return GetByIdRepository.getById(id);
    }
}

export default GetById;