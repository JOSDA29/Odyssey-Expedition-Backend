import connection from "../../config/configDB";
import UserDto from "../../DTO/user/userDto";

class UserRepository{
    static async addUser(user: UserDto){
        const sql = "INSERT INTO Cliente (id_cliente, nombre, apellido, correo, contrasenia, telefono, imagen) VALUES ($1, $2, $3, $4, $5, $6, decode($7, 'hex'))";
        const values = [user.idC, user.nameC, user.lastNameC, user.emailC, user.passwordC, user.phoneNumberC, user.imageC];
        
        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                return res.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }  
    }
}
export default UserRepository;