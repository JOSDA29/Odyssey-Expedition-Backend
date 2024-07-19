import getByEmail from "../../repository/user/adviser/getByEmail";

class getService {
    static async getByEmail(email: string){
        return await getByEmail.getByEm(email);
    }
}

export default getService;