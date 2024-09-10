import connection from '../../../config/configDB';

class uploadImageR {
    static async upload(email: string, file: string) {
        const sql = 'UPDATE Client SET imageURL = $2 WHERE email = $1';
        const values = [email, file];
        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                return res;
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
