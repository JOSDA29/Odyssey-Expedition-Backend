import GetAllRepository from '../../../repository/managementServices/hotel/getAll';

class GetAll {
    static async getAll (){
        return GetAllRepository.getAll();
    }
}

export default GetAll;