import connection from "../../../config/configDB";


class FindAll{
    static async findAll(){
        const sql = 'SELECT * FROM Client';
        try {
            const client = await connection.connect();
            try {
                const res = await client.query(sql);
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

export default FindAll;