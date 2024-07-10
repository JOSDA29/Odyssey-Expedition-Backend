import ChangePassword from "../../DTO/changePasswordDTO";
import User from "../../DTO/userDTO";
import AdviserR from "../../repository/user/adviser/updateData";
import ClientR from "../../repository/user/client/updateData";

class Client {
    static async updateC(user: User){
        await ClientR.update(user);
        return { message: 'Succesfull Update'}
    }
    static async changePassword(changePassword: ChangePassword) {
        await ClientR.changePassword(changePassword);
        return{ message: 'Password Update Succesful'}
    }
}

export default Client;