import ChangePassword from "../../DTO/changePasswordDTO";
import User from "../../DTO/updateDTO";
import AdminR from "../../repository/user/admin/updateData";

class AdminUpdate {
    static async updateA(user: User){
        await AdminR.updateAdmin(user);
        return { message: 'Succesfull Update'}
    }
    static async changePassword(changePassword: ChangePassword) {
        const result = await AdminR.changePassword(changePassword);
        return {message: result.message};
    }
}

export default AdminUpdate;