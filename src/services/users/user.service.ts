import UserRepository from "../../repository/user/userRepository";
import UserDto from "../../DTO/user/user-dto";
import generateHash from "../../helpers/generateHash";

class UserService{
    static async register(user:UserDto){
        const password: string = await generateHash(user.password);
        return await password, UserRepository.addUser(user);
    }
}
export default UserService;