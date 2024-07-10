import registerRepository from "../../repository/user/client/registerRepository";
import UserDto from "../../DTO/user/userDto";
import generateHash from "../../helpers/generateHash";
import RegisterRepository from "../../repository/user/admin/registerAdviser";

class RegisterService{
    static async register(user:UserDto){
        const password: string = await generateHash(user.passwordC);
        user.passwordC = password;
        return await RegisterRepository.registerAdviser(user);
    }
}
export default RegisterService;