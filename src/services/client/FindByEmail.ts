import FindByEmail from "../../repository/user/client/findbyEmail";

class findService {
    static async findByEmail(email: string){
        return await FindByEmail.findByEm(email);
    }
}

export default findService;