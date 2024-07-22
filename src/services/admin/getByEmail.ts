import getByEmail from '../../repository/user/admin/getByEmail';

class getService {
    static async getByEmail(email: string) {
        return await getByEmail.getByEm(email);
    }
}

export default getService;
