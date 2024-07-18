import ChangePassword from "../../../DTO/changePasswordDTO";
import User from "../../../DTO/updateDTO";
import connection from "../../../config/configDB";
import bcrypt from "bcryptjs";
import generateHash from "../../../helpers/generateHash";

class AdminR {
    static async updateAdmin(user: User){
        const tables = ["Client", "Administrator", "Adviser"];
        let tableName = "";
        
        // Verificar a qué tabla pertenece el usuario
        for (const table of tables) {
            const checkSql = `SELECT 1 FROM ${table} WHERE ${table.toLowerCase()}ID = $1`;
            try {
                const client = await connection.connect();
                try {
                    const result: any = await client.query(checkSql, [user.id]);
                    if (result.rowCount > 0) {
                        tableName = table;
                        break;
                    }
                } finally {
                    client.release();
                }
            } catch (error: any) {
                console.log('Error Executing query', error.stack);
                throw error;
            }
        }
        
        if (tableName === "") {
            throw new Error("User not found in any table");
        }

        const fieldsToUpdate = [];
        const values = [];
        
        const userIdIndex = 1;
        values.push(user.id);
        
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
        const sql = `UPDATE ${tableName} SET ${setClause} WHERE ${tableName.toLowerCase()}ID = $1`;

        try {
            const client = await connection.connect();
            try {
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

    static async changePassword(userPassword: ChangePassword){
        const { id, oldPassword, newPassword } = userPassword;
        
        const sql = 'SELECT password FROM Administrator WHERE administratorid = $1';
        const values = [id];
        try {
            const client = await connection.connect();
            try{
                const result: any  = await client.query(sql, values);
                
                if(result.rows.length > 0) {
                    const user = result.rows[0];
                    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
                    if(isPasswordValid){ 
                        const hashedPassword = await generateHash(newPassword);   
                        await this.updatePassword(id, hashedPassword);
                        
                        return { message: 'Password Update Succesful'}
                    } else {
                        throw new Error("Incorrect Old Password");
                    }
                }
                return result.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }

    static async updatePassword(id: string, newPassword: string){
        const sql = "UPDATE Administrator SET password = $1 WHERE administratorid = $2";
        const values = [newPassword, id];
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
export default AdminR;