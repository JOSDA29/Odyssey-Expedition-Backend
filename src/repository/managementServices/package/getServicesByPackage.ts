import connection from "../../../config/configDB";

class GetServicesByPackageRepository {
    static async getServices(idPackage: number) {
        const sql = `SELECT * FROM getServicesByPackage($1)`;
        const values = [idPackage];

        try {
            const dbConnection = await connection.connect();
            try {
                const res = await dbConnection.query(sql, values);
                return res.rows;
            } finally {
                dbConnection.release();
            }
        } catch (error: any) {
            console.error("Error executing query:", error.stack);
            throw new Error('Error executing query in GetServicesByPackageRepository');
        }
    }
}

export default GetServicesByPackageRepository;
