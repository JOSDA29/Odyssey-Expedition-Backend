import PackageDTO from "../../../DTO/managementServices/package/packageDTO";
import packageRepository from "../../../repository/managementServices/package/create";


class packageService {
    static async package (packageSer: PackageDTO) {
        if(packageSer.departureDate && packageSer.returnDate && packageSer.departureDate > packageSer.returnDate) {
            throw new Error ('The departure date cannot be later than the return date.');
        } 
        try {
            const results = await packageRepository.create(packageSer);

            if(results === 0) {
                return {success: true, message: 'Error'}
            }

            return {success: true, message: 'Package created succesfull'}

        } catch (error) {
            console.error('Error filtering packages:', error);
            throw new Error('Internal error when trying to filter packages.');
        }
       
    }
}

export default packageService;