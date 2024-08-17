import UpdateDTO from '../../../DTO/managementServices/package/updateDTO';
import UpdateRepository from '../../../repository/managementServices/package/update';

class Update {
    static async update(updateDTO: UpdateDTO) {

        if (!updateDTO.id || updateDTO.id <= 0) {
            throw new Error("Invalid ID.");
        }
        if(updateDTO.id >= 1){
            throw new Error("ID shouldn't be changed");
        }
        if (updateDTO.numberOfPeople && updateDTO.numberOfPeople <= 0) {
            throw new Error("The number of persons must be greater than 0.");
        }
        if (updateDTO.departureDate && updateDTO.returnDate && updateDTO.departureDate > updateDTO.returnDate) {
            throw new Error("The departure date cannot be later than the return date.");
        }
        
        try {
            const result = await UpdateRepository.UpdateRepo(updateDTO);
            if (result === 0) {
                throw new Error("No record was updated. Verify that the ID is correct.");
            }
            return { success: true, message: 'Successful update.' };
        } catch (error) {
            console.error('Error updating the package:', error);
            throw new Error('Internal error when trying to update the package.');
        }
    }
}

export default Update;
