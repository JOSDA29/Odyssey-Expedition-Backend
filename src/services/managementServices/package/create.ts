import PackageDTO from "../../../DTO/managementServices/package/packageDTO";
import packageRepository from "../../../repository/managementServices/package/create";

class PackageService {
    static async createPackage(packageData: PackageDTO) {
        if (packageData.departureDate > packageData.returnDate) {
            return { success: false, message: 'The departure date cannot be later than the return date.', state: 400 };
        }

        try {
            const packageId = await packageRepository.create(packageData);

            if (packageId) {
                return { success: true, message: 'Package created successfully', state: 201, packageId };
            }

            return { success: false, message: 'Failed to create package', state: 500 };
        } catch (error: any) {
            console.error('Error creating package:', error.message);
            return { success: false, message: 'Internal server error', state: 500 };
        }
    }
}

export default PackageService;
