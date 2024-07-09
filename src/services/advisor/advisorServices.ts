import AdvisorRepository from "../../repository/advisor/advisorRepository";
import UserDto from "../../DTO/user/userDto";
import generateHash from "../../helpers/generateHash";

class AdvisorService{
    static async register(user:UserDto){
        const password: string = await generateHash(user.passwordC);
        user.passwordC = password;
        return await AdvisorRepository.register(user);
    }
}
export default AdvisorService;