import connection from "../../config/configDB";

class ChangeState {
    static async changeState(email:string, state:boolean){
        const sql = 'update supplier set state = $1 where email = $2';
        const values = [state, email];

        try {
            const client = await connection.connect();
            try {
                const result = client.query(sql, values);
                return result;
            } finally {
                client.release();
            }
        } catch (error) {
            
        }
    }
}

export default ChangeState;