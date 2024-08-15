import DeleteRepository from '../../../repository/managementServices/package/delete';

class Delete {
    static async deleteService (id: number){
        if (id <= 0) {
            throw new Error("Invalid ID.");
        }
        try {
            const result = await DeleteRepository.delete(id) ;
            if (result === 0) {
                throw new Error("No record was deleted. Verify that the ID is correct.");
            }
            return { success: true, message: 'Successful delete.' };
        } catch (error) {
            console.error('Error deleting the package:', error);
            throw new Error('Internal error when trying to delete the package.');
        }

    }
}

export default Delete;