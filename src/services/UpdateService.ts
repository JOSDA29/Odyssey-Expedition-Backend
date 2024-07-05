import User from "../DTO/userDTO";
import updateRepository from "../repository/updateDataRepository";

class updateService {
    static async updateUser(user: User, updaterRole: string): Promise<{ message: string }> {
        try {
            switch (updaterRole) {
                case 'Administrator':
                    await updateRepository.updateAdmin(user);  
                    break;
                case 'Advisor':
                    await updateRepository.updateAdviser(user);
                    break;
                case 'User':
                    await updateRepository.updateClient(user);   
                    break;
                    default:
                        throw new Error("You dont have permission to update users");
            }

            return { message: 'Succesfull Update' };
            
        } catch (error: any) {
            throw new Error("Error updating user: " + error.message);
            
        }
    }
}

export default updateService;