import ChangePassword from "../../DTO/changePasswordDTO";
import User from "../../DTO/userDTO";
import AdminR from "../../repository/user/admin/updateData";
import admin from "../../repository/user/admin/updateData";

class Admin {
    static async updateA(user: User){
        await AdminR.update(user);
        return { message: 'Succesfull Update'}
    }
    static async changePassword(changePassword: ChangePassword) {
        await AdminR.changePassword(changePassword);
        return{ message: 'Password Update Succesful'}
    }
}

export default Admin;