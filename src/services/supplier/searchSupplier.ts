import SearchSupplierDTO from "../../DTO/user/supplier/SearchSupplierDTO";
import SearchSupplierRepository from "../../repository/supplier/searchSupplier";

class SearchSupplier {
    static async searchSupplier(searchSupplierDTO: SearchSupplierDTO){
        const result = SearchSupplierRepository.searchSupplier(searchSupplierDTO);
        return result;
    }
}

export default SearchSupplier;
