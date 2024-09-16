import getByEmail from '../../../repository/user/client/getByEmail';

class getService {
    static async getByEmail(email: string) {
        try {
            const user = await getByEmail.getByEm(email);

            if (user.length === 0) {
                return null;
            }
            return user[0];
        } catch (error) {
            console.error('Error trying to obtain the client', error);
            throw error;
        }
    }
}

export default getService;
