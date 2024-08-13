import connection from "../../../config/configDB";

class GetById {
    static async getById(id: number){
        const sql = 'SELECT * FROM find_by_id($1)';
        const values = [id];
        try{
            const services = await connection.connect();
            try{
                const res = await connection.query(sql, values);
                return res.rows;
            } finally {
                services.release();
            }
        } catch (error: any){
            console.error('Error executing query', error.stack);
            throw error
        }
    }
}

export default GetById;