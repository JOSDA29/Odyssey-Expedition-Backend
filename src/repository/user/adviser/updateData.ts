import ChangePassword from '../../../DTO/changePasswordDTO';
import User from '../../../DTO/updateDTO';
import connection from '../../../config/configDB';
import generateHash from '../../../helpers/generateHash';
import bcrypt from 'bcryptjs';

class AdviserR {
    static async update(user: User) {
        
        const sql = `select update_adviser($1, $2, $3, $4, $5, $6)`;
        const values = [user.email, user.id, user.names, user.lastNames, user.phone, user.state];

        try {
            const client = await connection.connect();
            try {
                const result = await client.query(sql, values);
                if (result.rows[0].update_adviser == true) {
                    return { message: 'Successful Update' };
                }
                return { message: 'Data not found' };
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }

    static async changePassword(userPassword: ChangePassword) {
        const { email, oldPassword, newPassword } = userPassword;

        const sql = 'SELECT password FROM Adviser WHERE email = $1';
        const values = [email];
        try {
            const admin = await connection.connect();
            try {
                const result: any = await admin.query(sql, values);
                if (result.rows.length > 0) {
                    const user = result.rows[0];
                    const isPasswordValid = await bcrypt.compare(
                        oldPassword,
                        user.password,
                    );
                    if (isPasswordValid) {
                        const hashedPassword = await generateHash(newPassword);
                        await this.updatePassword(email, hashedPassword);
                        return { message: 'Password Update Succesful' };
                    }
                } else {
                    return { message: 'Client not found' };
                }
                return { message: 'Incorrect Old Password' };
            } finally {
                admin.release();
            }
        } catch (error: any) {
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }

    static async updatePassword(email: string, newPassword: string) {
        const sql = 'UPDATE Adviser SET password = $1 WHERE email = $2';
        const values = [newPassword, email];
        try {
            const res = await connection.connect();
            try {
                const result = await res.query(sql, values);
                return result.rows;
            } finally {
                res.release();
            }
        } catch (error: any) {
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }
}

export default AdviserR;
