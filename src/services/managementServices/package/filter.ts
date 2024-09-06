import FilterDTO from '../../../DTO/managementServices/package/FilterDTO';
import FilterRepository from '../../../repository/managementServices/package/filter';

class Filter {
    static async filter(filterDTO: FilterDTO) {
        
        if (filterDTO.departureDate && filterDTO.returnDate && filterDTO.departureDate > filterDTO.returnDate) {
            return { success: false, menssage: 'The departure date cannot be later than the return date.', status: 400 };
        }

        try {
            const results = await FilterRepository.filter(filterDTO);
            return { success: true, data: results, status: 200 };
        } catch (error) {
            console.error('Error filtering packages:', error);
            throw new Error('Internal error when trying to filter packages.');
        }
    }
}

export default Filter;
