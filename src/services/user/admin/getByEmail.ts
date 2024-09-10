import getByEmail from '../../../repository/user/admin/getByEmail';

class getService {
    static async getByEmail(email: string) {
        return await getByEmail.getByEmail(email);
    }
}

export default getService;
