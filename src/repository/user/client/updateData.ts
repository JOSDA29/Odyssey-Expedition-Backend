import ChangePassword from "../../../DTO/changePasswordDTO";
import User from "../../../DTO/updateDTO";
import connection from "../../../config/configDB";
import generateHash from "../../../helpers/generateHash";
import bcrypt from 'bcryptjs';

class ClientR {
    static async update(user: User){

        const fieldsToUpdate = [];
        const values = [];
        const userIdIndex = 1;

        values.push(user.email);
        
        let index = userIdIndex + 1; 

        if (user.names !== undefined) {
            fieldsToUpdate.push(`firstName = $${index}`);
            values.push(user.names);
            index++;
        }
        if (user.lastNames !== undefined) {
            fieldsToUpdate.push(`lastName = $${index}`);
            values.push(user.lastNames);
            index++;
        }
        if (user.phone !== undefined) {
            fieldsToUpdate.push(`phone = $${index}`);
            values.push(user.phone);
            index++;
        }
        if (user.image !== undefined) {
            fieldsToUpdate.push(`image = $${index}`);
            values.push(user.image);
            index++;
        }
        
        // Construcción de la cláusula SET y la consulta SQL
        const setClause = fieldsToUpdate.join(", ");
        const sql = `UPDATE Client SET ${setClause} WHERE email = $1`;

        try{
            const client = await connection.connect();
            try{
                const result = await client.query(sql, values); 
                return result.rows;
            } finally {
                client.release();
            }
        } catch (error: any){
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }

    static async changePassword(userPassword: ChangePassword){
        const { email, oldPassword, newPassword } = userPassword;
        
        const sql = 'SELECT password FROM Client WHERE email = $1';
        const values = [email];
        try {
            const client = await connection.connect();
            try{
                const result: any = await client.query(sql, values);
                if(result.rows.length > 0) {
                    const user = result.rows[0];                    
                    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);                    
                    if(isPasswordValid){
                        const hashedPassword = await generateHash(newPassword);
                        await this.updatePassword(email, hashedPassword);
                        return { message: 'Password Update Succesful'}
                    }
                }else{
                    return { message: 'Client not found'}
                }
                return { message: 'Incorrect Old Password'}
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }

    static async updatePassword(email: string, newPassword: string){
        const sql = "UPDATE Client SET password = $1 WHERE email = $2";
        const values = [newPassword, email];
        try {
            const client = await connection.connect();
            try{
                const result = await client.query(sql, values);
                return result.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }
}

export default ClientR;