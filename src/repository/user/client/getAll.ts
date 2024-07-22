import connection from "../../../config/configDB";

class GetAll{
    static async getAll(){
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

export default GetAll;