import connection from "../../../config/configDB";

class AddId{
    static async addId(email: string, id: string){
        const sql = 'UPDATE Client SET ClientId = $2 WHERE email = $1';
        const values = [email, id];
        try {
            const services = await connection.connect();
            try {
                const res = await services.query(sql, values);
                console.log(res);
                
                return res;
            } finally {
                services.release();
            }
        } catch (error: any){
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}

export default AddId;