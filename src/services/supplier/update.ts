import UpdateSupplierRepository from "../../repository/supplier/update";
import UpdateSupplierDTO from "../../DTO/user/supplier/UpdateSupplierDTO";

class UpdateSupplier {
  static async updateSupplier(updateSupplierDTO: UpdateSupplierDTO): Promise<boolean> {
    try {
      const result = await UpdateSupplierRepository.updateSupplier(updateSupplierDTO);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default UpdateSupplier;
