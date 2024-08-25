import connection from "../../../config/configDB";

class GetAll {
    static async getAll() {
        const sql = 'SELECT * FROM Hotel';
        let client;
        try {
            client = await connection.connect();
            const res = await client.query(sql);
            console.log(res.rows);
            return res.rows;
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        } finally {
            if (client) {
                client.release(); 
            }
        }
    } 
}

export default GetAll;
