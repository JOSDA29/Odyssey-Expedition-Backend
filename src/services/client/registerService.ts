import registerRepository from "../../repository/user/client/registerRepository";
import UserDto from "../../DTO/user/userDto";
import generateHash from "../../helpers/generateHash";

class RegisterService{
    static async register(user:UserDto){
        const password: string = await generateHash(user.passwordC);
        user.passwordC = password;
        return await registerRepository.register(user);
    }
}
export default RegisterService;