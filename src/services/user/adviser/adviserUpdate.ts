import ChangePassword from '../../../DTO/changePasswordDTO';
import User from '../../../DTO/updateDTO';
import AdviserR from '../../../repository/user/adviser/updateData';

class AdviserUpdate {
    static async updateAd(user: User) {
        const result = await AdviserR.update(user);
        return { message: result.message };
    }
    static async changePassword(changePassword: ChangePassword) {
        const result = await AdviserR.changePassword(changePassword);
        return { message: result.message };
    }
}

export default AdviserUpdate;
