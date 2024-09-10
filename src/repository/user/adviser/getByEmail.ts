import connection from '../../../config/configDB';

class getByEmail {
    static async getByEmail(email: string) {
        const sql = 'SELECT * FROM Adviser WHERE email = $1';
        const values = [email];

        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql, values);
                return res.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default getByEmail;
