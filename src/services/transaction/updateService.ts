import UpdateDTO from '../../DTO/transaction/UpdateDTO';
import UpdateRepository from '../../repository/transaction/updateRepository';

class updateService {
    static async updateService (transaction: UpdateDTO) {
        try {
            const transactionResult = await UpdateRepository.update(transaction);
            if(transactionResult) {
                return { success: true, message: 'Transaction created successfully', state: 201, transactionResult};
            }
            return { success: false, message: 'Failed to update transaction', state: 500};
        } catch (error) {
            throw error;
        }
    }
}

export default updateService;