import connection from "../../../config/configDB";

class ChangeState {
    static async ChangeState(email: string, state: boolean, ){
        const sql = 'UPDATE Client SET state = $2 WHERE email = $1';
        const values = [email, state]; 
        try {
            const client = await connection.connect();
            try{
                const result = await client.query(sql, values);
                return result.rows;
            } finally{
                client.release();
            }
        }catch (error: any) {
            console.log('Error Executing query', error.stack);
            throw error;
        }
    }
}

export default ChangeState;