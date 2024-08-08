import RegisterSupplierRepository from "../../repository/supplier/register";
import SupplierDTO from "../../DTO/user/supplier/SupplierDTO";

class RegisterSupplierService {
    static async registerSupplier(supplierDTO: SupplierDTO) {
        try {
            const result =
                await RegisterSupplierRepository.registerSupplier(supplierDTO);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default RegisterSupplierService;
