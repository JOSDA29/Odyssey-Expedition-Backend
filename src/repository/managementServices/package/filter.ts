import connection from "../../../config/configDB";
import PackageDTO from "../../../DTO/managementServices/package/FilterDTO";

class Filter {
    static async filter(packageDTO: PackageDTO){
        const sql = `SELECT * FROM filter_package(
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11,
        $12,
        $13,
        $14,
        $15
        )`;
        const values = [
            packageDTO.id,
            packageDTO.origin,
            packageDTO.destination,
            packageDTO.departureDate,
            packageDTO.returnDate,
            packageDTO.numberOfPeople,
            packageDTO.itinerary,
            packageDTO.packageServices,
            packageDTO.customerPreferences,
            packageDTO.state,
            packageDTO.fkHotelID,
            packageDTO.fkTransportID,
            packageDTO.status,
            packageDTO.minPrice,
            packageDTO.maxPrice
        ];
        try {
            const services = await connection.connect();
            try{
                const res = await services.query(sql, values);
                return res.rows;
            } finally {
                services.release();
            }
            
        } catch (error: any) {
            console.error("Error executing query:", error.stack);
            throw error;
        }
    }
}

export default Filter;