import filterDTO from "../../../DTO/managementServices/hotel/filterDTO";
import filterRepository from '../../../repository/managementServices/hotel/filter';

class Filter {
    static async filter(hotel: filterDTO) {
        try {
            const results = await filterRepository.filter(hotel);
            return { success: true, data: results };
        } catch (error) {
            console.error('Error filtering hotels:', error);
            throw new Error('Internal error when trying to filter hotels.');
        }
    }
}

export default Filter;
