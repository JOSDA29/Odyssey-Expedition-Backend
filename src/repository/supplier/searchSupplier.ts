import connection from "../../config/configDB";
import SearchSupplierDTO from "../../DTO/user/supplier/SearchSupplierDTO";

class SearchSupplier {
    static async searchSupplier(searchSupplierDTO : SearchSupplierDTO){
        const sql = 'select * from filter_suppliers ($1, $2, $3, $4)';
        const values = [
            searchSupplierDTO.supplierID,
            searchSupplierDTO.email,
            searchSupplierDTO.phone,
            searchSupplierDTO.companyName
        ]

        try {
            const client = await connection.connect();

            try {
                const result = await client.query(sql, values);
                return result.rows;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.log(error.stack);
            
        }
    }
}

export default SearchSupplier;