import ChangePassword from '../../../DTO/changePasswordDTO';
import User from '../../../DTO/updateDTO';
import UserDto from '../../../DTO/user/userDto';
import AdminR from '../../../repository/user/admin/updateData';

class AdminUpdate {
    static async updateA(user: User) {
        try {
            const result = await AdminR.updateAdmin(user);
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
        const result = await AdminR.changePassword(changePassword);
        return { message: result.message };
    }
}

export default AdminUpdate;
