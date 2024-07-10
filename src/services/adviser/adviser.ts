import ChangePassword from "../../DTO/changePasswordDTO";
import User from "../../DTO/userDTO";
import AdviserR from "../../repository/user/adviser/updateData";

class Adviser {
    static async updateAd(user: User){
        await AdviserR.update(user);
        return { message: 'Succesfull Update'}
    }
    static async changePassword(changePassword: ChangePassword) {
        await AdviserR.changePassword(changePassword);
        return{ message: 'Password Update Succesful'}
    }
}

export default Adviser;