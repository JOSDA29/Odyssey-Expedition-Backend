import connection from "../../config/config-DB";
import UserDto from "../../DTO/user/user-dto";

class UserRepository{
    static async addUser(user: UserDto){
        const sql = "INSERT INTO client (Id_Client, name_C, lastName_C, email_C, password_C, phoneNumber_C, image_C) VALUES ($1, $2, $3, $4, $5, $6, $7)";
        const values = [user.id_Client, user.name, user.lastName, user.email, user.password, user.phoneNumber, user.image];
        
        try {
            const result = await connection.query(sql, values);
            console.log(result);
            return result;
        } catch (error) {
            console.error('Error adding user:', error);
            throw error;
        }    
    }
}
export default UserRepository;