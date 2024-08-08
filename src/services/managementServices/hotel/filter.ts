import filterDTO from "../../../DTO/managementServices/filterDTO";
import filterRepository from '../../../repository/managementServices/hotel/filter';
class Filter {
    static async filter(hotel: filterDTO): Promise<any>{
        const results = await filterRepository.filter(hotel);

        if(results.length === 0){
            return { message: 'Not found'}
        }
        return results;
    }
}

export default Filter;