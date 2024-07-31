import ChangePassword from '../../DTO/changePasswordDTO';
import User from '../../DTO/updateDTO';
import ClientR from '../../repository/user/client/updateData';

class Client {
    static async updateC(user: User) {
        const client  = await ClientR.update(user);
        return { message: client?.message };
    }
    static async changePassword(changePassword: ChangePassword) {
        const client = await ClientR.changePassword(changePassword);
        return { message: client.message };
    }
}

export default Client;
