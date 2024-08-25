import PackageDTO from "../../../DTO/managementServices/package/packageDTO";
import packageRepository from "../../../repository/managementServices/package/create";


class packageService {
    static async package (packageSer: PackageDTO) {
        return await packageRepository.create(packageSer);
    }
}

export default packageService;