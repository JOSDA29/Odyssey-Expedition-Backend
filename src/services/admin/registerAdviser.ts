import registerRepository from "../../repository/user/admin/registerAdviser";
import UserDto from "../../DTO/user/userDto";
import generateHash from "../../helpers/generateHash";

class RegisterService{
    static async register(user:UserDto){
        const password: string = await generateHash(user.password);
        user.password = password;
        return await registerRepository.registerAdviser(user);
    }
}
export default RegisterService;