import FilterDTO from '../../../DTO/managementServices/package/FilterDTO';
import FilterRepository from '../../../repository/managementServices/package/filter';

class Filter {
    static async filter(filterDTO: FilterDTO) {
        
        if (filterDTO.departureDate && filterDTO.returnDate && filterDTO.departureDate > filterDTO.returnDate) {
            throw new Error("The departure date cannot be later than the return date.");
        }

        if (filterDTO.minPrice && filterDTO.maxPrice && filterDTO.minPrice > filterDTO.maxPrice) {
            throw new Error("The minimum price cannot be greater than the maximum price.");
        }

        try {
            const results = await FilterRepository.filter(filterDTO);

            if (results.length === 0) {
                return { success: true, message: 'No packages found matching the criteria.' };
            }

            return { success: true, data: results };
        } catch (error) {
            console.error('Error filtering packages:', error);
            throw new Error('Internal error when trying to filter packages.');
        }
    }
}

export default Filter;
