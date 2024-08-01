import connection from '../../../config/configDB';
import UserDto from '../../../DTO/user/userDto';
import EmailVerification from '../../../helpers/verification/EmailVerification';

class RegisterService {
    static async register(user: UserDto) {
        const emailExists = await EmailVerification(user.email);

        if (emailExists) {
            return { success: false, message: 'Email already exists' };
        } else {
            const sql =
                'INSERT INTO Client( firstName, lastName, email, password, phone ) VALUES ($1, $2, $3, $4, $5 )';
            const values = [
                user.name,
                user.last_Name,
                user.email,
                user.password,
                user.phoneNumber,
            ];

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

export default RegisterService;
