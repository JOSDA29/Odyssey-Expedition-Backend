import connection from "../../config/configDB";
import UserDto from "../../DTO/user/userDto";

class registerRepository{

    static async register(user: UserDto){
        const sql = "INSERT INTO Adviser(AdviserID, firstName, lastName, email, password , phone, image, fkadvisorid) VALUES ($1, $2, $3, $4, $5, $6, decode($7, 'hex'), $8)";
        const values = [user.idC, user.nameC, user.lastNameC, user.emailC, user.passwordC, user.phoneNumberC, user.imageC, user.id_Admin];
        
        try {
            const client = await connection.connect();
            try{
                const res = await client.query(sql, values);
                return res.rows;
            }finally{
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }

}
export default registerRepository;