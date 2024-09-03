import create from "../../../controllers/managementServices/package/create";
import PackageDTO from "../../../DTO/managementServices/package/packageDTO";
import packageRepository from "../../../repository/managementServices/package/create";


class packageService {
    static async package (packageSer: PackageDTO) {
        try {
            const result = await packageRepository.create(packageSer);
            if(result === 0) {
                throw new Error("No record was Created")
            }
            return { success: true, message: 'Successful Created Package.'};
        } catch (error) {
            console.error("Error Creating package: ", error);
            throw new Error("Internal Error");
        }
    }
}

export default packageService;