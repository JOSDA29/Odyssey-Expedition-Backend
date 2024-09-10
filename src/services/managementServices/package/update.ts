import UpdateDTO from '../../../DTO/managementServices/package/updateDTO';
import UpdateRepository from '../../../repository/managementServices/package/update';

class Update {
    static async update(updateDTO: UpdateDTO) {

        if (!updateDTO.id || updateDTO.id <= 0) {
            return { success: false, message: 'Bad request. Invalid ID.', status: 400 };
        }
        if (updateDTO.numberOfPeople && updateDTO.numberOfPeople <= 0) {
            return { success: false, message: 'Bad request. The number of persons must be greater than 0.', status: 400 };
        }
        try {
            const result = await UpdateRepository.UpdateRepo(updateDTO);
            if (result === false) {
                return { success: false, message: 'Not Found. The package with the given ID does not exist in the database.', status: 404 };
            }
            return { success: true, message: 'Successful update.', status: 200};
        } catch (error) {
            console.error('Error updating the package:', error);
            throw new Error('Internal error when trying to update the package.');
        }
    }
}

export default Update;
