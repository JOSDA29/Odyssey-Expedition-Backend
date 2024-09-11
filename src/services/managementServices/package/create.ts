import PackageDTO from "../../../DTO/managementServices/package/packageDTO";
import packageRepository from "../../../repository/managementServices/package/create";


class packageService {
    static async package (packageSer: PackageDTO) {
        try {
            const results = await packageRepository.create(packageSer);
            if(results!) {
                return { success: true, message: 'No packages created'}
            }
            
            return { success: true, message:' Package created successfully' };
        } catch (error) {
            console.error('Error creating packages: ', error);
            throw new Error('Internal error when trying to create package');
        }
    }
}

export default packageService;