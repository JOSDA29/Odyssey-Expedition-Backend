import getByEmail from '../../repository/user/adviser/getByEmail';

class getService {
    static async getByEmail(email: string) {
        return await getByEmail.getByEmail(email);
    }
}

export default getService;
