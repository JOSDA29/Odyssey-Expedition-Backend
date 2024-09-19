import GetServicesByPackageRepository from "../../../repository/managementServices/package/getServicesByPackage";

class GetServicesByPackage {
    static async filter(idPackage: number) {
        try {
            const results = await GetServicesByPackageRepository.getServices(idPackage);

            if (results.length === 0) {
                return { success: false, data: null, status: 404 };
            }

            return { success: true, data: results, status: 200 };
        } catch (error) {
            console.error('Error filtering services of packages:', (error as Error).message);
            return { success: false, data: null, status: 500 };
        }
    }
}

export default GetServicesByPackage;
