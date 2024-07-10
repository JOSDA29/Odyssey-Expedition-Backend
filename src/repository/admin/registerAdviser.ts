import connection from "../../config/configDB";
import UserDto from "../../DTO/user/userDto";
import EmailVerification from '../../helpers/verification/EmailVerification';
import IdVerification from "../../helpers/verification/IdVerification";

class RegisterRepository {

    static async registerAdviser(user: UserDto) {
        const emailExists = !(await EmailVerification(user.emailC));
        const idExists = !(await IdVerification(user.idC));

        if (emailExists && idExists) {
            return { success: false, message: "Both email and ID already exist" };
        } else if (emailExists) {
            return { success: false, message: "Email already exists" };
        } else if (idExists) {
            return { success: false, message: "ID already exists" };
        } else {
            const sql = "INSERT INTO Adviser(AdviserID, firstName, lastName, email, password, phone, image, fkadvisorid) VALUES ($1, $2, $3, $4, $5, $6, decode($7, 'hex'), $8)";
            const values = [user.idC, user.nameC, user.lastNameC, user.emailC, user.passwordC, user.phoneNumberC, user.imageC, user.id_Admin];

            try {
                const client = await connection.connect();
                try {
                    const res = await client.query(sql, values);
                    return { success: true, data: res.rows };
                } finally {
                    client.release();
                }
            } catch (error: any) {
                console.error('Error executing query', error.stack);
                throw error;
            }
        }
    }
}

export default RegisterRepository;
