import connection from '../../config/configDB';
import Create from '../../DTO/transaction/createDTO';

class createRepository {
    static async create (transaction: Create) {
        const sql = 'SELECT Create_transaction($1, $2, $3, $4, $5, $6, $7, $8)';
        const values = [transaction.clientEmail, transaction.adviserEmail, transaction.billingDate, transaction.service, transaction.paymentMethod, transaction.serviceType, transaction.description, transaction.state];
        const transactions = await connection.connect();
        try {
            const result = await transactions.query(sql, values);
            return result.rows;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('executing query error: ', error.stack);
                throw error;
            } 
        } finally {
            transactions.release();
        }
    }
}


export default createRepository;