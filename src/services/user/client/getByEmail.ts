import getByEmail from '../../../repository/user/client/getByEmail';

class getService {
    static async getByEmail(email: string) {
        try {
            const user = await getByEmail.getByEm(email); 

            return user;
        } catch (error) {
            console.error('Error trying to obtain the client', error);
            throw error;
        }
    }
}

export default getService;
