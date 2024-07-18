import registerRepository from "../../repository/user/client/registerRepository";
import UserDto from "../../DTO/user/userDto";
import generateHash from "../../helpers/generateHash";

class RegisterService{
    static async register(user:UserDto){
        const password: string = await generateHash(user.password);
        user.password = password;
        return await registerRepository.register(user);
    }
}
export default RegisterService;