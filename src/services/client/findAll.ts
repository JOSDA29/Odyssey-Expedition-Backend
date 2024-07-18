import FindAll from "../../repository/user/client/findAll";

class findService {
    static async findAll(){
        return FindAll.findAll();
    }
}

export default findService;