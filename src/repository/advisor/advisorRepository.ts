import connection from "../../config/configDB";
import UserDto from "../../DTO/user/userDto";

class AdvisorRepository{

    static async register(user: UserDto){
        const sql = "INSERT INTO Asesor(nombre, apellido, correo, contrasenia, telefono, imagen, FK_id_administrador) VALUES ($1, $2, $3, $5, decode($6, 'hex'))";
        const values = [user.nameC, user.lastNameC, user.emailC, user.passwordC, user.phoneNumberC, user.imageC, user.id_Admin];

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
export default AdvisorRepository;