import UserRepository from "../../repository/user/userRepository";
import UserDto from "../../DTO/user/userDto";
import generateHash from "../../helpers/generateHash";

class UserService{
    static async register(user:UserDto){
        const password: string = await generateHash(user.passwordC);
        user.passwordC = password;
        return await UserRepository.addUser(user);
    }
}
export default UserService;