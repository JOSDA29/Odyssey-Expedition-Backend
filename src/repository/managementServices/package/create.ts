import connection from "../../../config/configDB";
import PackageDTO from "../../../DTO/managementServices/package/packageDTO";

class Create {
    static async create(packageData: PackageDTO) {
        const sql = `
            SELECT insert_package(
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
            )
        `;
        const values = [
            packageData._namePackage,
            packageData.origin,
            packageData.destination,
            packageData.departureDate,
            packageData.returnDate,
            packageData.numberOfPeople,
            packageData.itinerary,
            packageData.customerPreferences,
            packageData.state,
            packageData.fkAdviserEmail,
        ];

        try {
            const client = await connection.connect();
            try {
                const result = await client.query(sql, values);
                return result.rows[0]?.insert_package || null;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query:', error.message);
            throw new Error('Database operation failed.');
        }
    }
}

export default Create;
