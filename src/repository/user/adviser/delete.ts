import connection from "../../../config/configDB";

class Delete {
    public static async deleteAdviser(email: string) {
        const sql = 'DELETE FROM adviser WHERE email = $1';
        const values = [email];

        try {
            const client = await connection.connect();

            try {
                const result = await client.query(sql, values);

                if (result.rowCount! > 0) {
                    return {
                        message: 'Adviser deleted successfully.'
                    };
                }

                return {
                    message: 'Adviser not found.'
                };
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query:', error.stack);
            throw new Error('Database error occurred.');
        }
    }
}

export default Delete;