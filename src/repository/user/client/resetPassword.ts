import connection from "../../../config/configDB";

class resetPassword {
    static async findByEmail (email: string){
        const sql = 'SELECT 1 FROM client WHERE email = $1 LIMIT 1';
        const values = [email];
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

export default resetPassword;