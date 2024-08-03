import connection from "../../config/configDB";
import UpdateSupplierDTO from "../../DTO/updateSupplierDTO";

class UpdateSupplierRepository {
  static async updateSupplier(updateSupplierDTO: UpdateSupplierDTO): Promise<boolean> {
    const sql = 'SELECT update_supplier($1, $2, $3, $4, $5)';
    const values = [
      updateSupplierDTO.supplierID,
      updateSupplierDTO.email,
      updateSupplierDTO.phone,
      updateSupplierDTO.schedule,
      updateSupplierDTO.address
    ];

    const client = await connection.connect();
    try {
      const result = await client.query(sql, values);
      return result.rows[0].update_supplier;
    } catch (error: any) {
      throw error;
    } finally {
      client.release();
    }
  }
}

export default UpdateSupplierRepository;
