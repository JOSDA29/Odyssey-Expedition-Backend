import connection from '../../../config/configDB';

class GetImage {
    static async get(email: string) {
        const sql = 'SELECT imageURL from Client WHERE email = $1';
        const values = [email];
        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                return res.rows[0].imageurl;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default GetImage;
