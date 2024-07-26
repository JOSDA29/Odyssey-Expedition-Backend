import connection from "../../../config/configDB";

class uploadImageR {
    static async upload(email: string, file: Buffer){
        const sql = 'UPDATE Client SET image = $2 WHERE email = $1';
        const values = [ email, file];
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

export default uploadImageR;