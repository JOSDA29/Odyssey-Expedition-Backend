import TransactionDTO from '../../DTO/transaction/createDTO';
import TransactionRepository from '../../repository/transaction/createRepository';

class CreateService {
    static async createService (transaction: TransactionDTO) {
        try {
            console.log("asdfasfsadfsafasfasdf", transaction);
            const transactionResult = await TransactionRepository.create(transaction);
            if(transactionResult) {
                return { success: true, message: 'Transaction created successfully', state: 201, transactionResult };
            } 
            return { success: false, message: 'Failed to create transaction', state: 500};
        } catch (error) {
            throw error;
        }
    }
}

export default CreateService;