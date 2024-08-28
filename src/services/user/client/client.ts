import ChangePassword from '../../../DTO/changePasswordDTO';
import User from '../../../DTO/updateDTO';
import ClientR from '../../../repository/user/client/updateData';

class Client {
    static async updateC(user: User) {
        try {
            const result = await ClientR.update(user);
            if(result === 0) {
                throw new Error("No record was updated. Verify that the Email is correct.");
            }
            return { success: true, message: 'Successfull Update.'};
        } catch (error) {
            console.error('Error updating admin: ', error);
            throw new Error('internal Error when trying to update the admin');
        }
    }
    static async changePassword(changePassword: ChangePassword) {
        const client = await ClientR.changePassword(changePassword);
        return { message: client.message };
    }
}

export default Client;
