import connection from "../../config/configDB";
import SupplierDTO from "../../DTO/user/supplier/SupplierDTO";

class RegisterSupplierRepository {
  static async registerSupplier(supplierDTO: SupplierDTO) {
    const sql = "SELECT create_supplier($1, $2, $3, $4, $5, $6, $7, $8)";
    const values = [
      supplierDTO.supplierID,
      supplierDTO.companyName,
      supplierDTO.email,
      supplierDTO.phone,
      supplierDTO.fkAdvisorEmail,
      supplierDTO.schedule,
      supplierDTO.address,
      supplierDTO.state,
    ];

        const client = await connection.connect();
        try {
            const result = await client.query(sql, values);
            return result.rows[0];
        } catch (error: any) {
            console.error('Error executing query:', error.stack);
            throw error;
        } finally {
            client.release();
        }
    }
}

export default RegisterSupplierRepository;
