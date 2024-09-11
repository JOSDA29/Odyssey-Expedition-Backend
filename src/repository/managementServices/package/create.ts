import connection from "../../../config/configDB";
import PackageDTO from "../../../DTO/managementServices/package/packageDTO";

class Create {
    static async create(packageRepo: PackageDTO){
        const sql = `SELECT insert_package(
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9
        )`;
        const values = [
            packageRepo.origin,
            packageRepo.destination,
            packageRepo.departureDate,
            packageRepo.returnDate,
            packageRepo.numberOfPeople,
            packageRepo.itinerary,
            packageRepo.packageServices,
            packageRepo.customerPreferences,
            packageRepo.state,
            packageRepo.fkAdviserEmail,
        ];
        console.log(values);
        
        try {
            const client = await connection.connect();
            try{
                const res = await client.query(sql, values);
                return res.rowCount;
            } finally {
                client.release();
            }
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
   }
}

export default Create;