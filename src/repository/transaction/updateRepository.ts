import connection from '../../config/configDB';
import UpdateDTO from '../../DTO/transaction/UpdateDTO';

class UpdateRepository {
    static async update (transaction: UpdateDTO){
        const sql = 'SELECT update_transaction($1, $2, $3, $4)'
        const values = [transaction.transactionID, transaction.price, transaction.state, transaction.service];
        const transactions = await connection.connect();
        try {
            const result = await connection.query(sql, values);
            return result.rowCount;
        } catch (error: unknown) {
            if(error instanceof Error) {
                console.error('Executing query error: ', error.stack);
                throw error;
            }
        }
    }
}

export default UpdateRepository;