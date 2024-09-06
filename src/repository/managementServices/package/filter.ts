    import connection from "../../../config/configDB";
    import PackageDTO from "../../../DTO/managementServices/package/FilterDTO";

    class Filter {
        static async filter(packageDTO: PackageDTO){
            const sql = `SELECT * FROM filter_package(
            $1::INT,
            $2::VARCHAR,
            $3::VARCHAR,
            $4::BOOLEAN,
            $5::DATE,
            $6::DATE
            )`;
            const values = [
                packageDTO.id || null,
                packageDTO.origin || null,
                packageDTO.destination || null,
                packageDTO.state !== undefined ? packageDTO.state : null,
                packageDTO.departureDate || null,
                packageDTO.returnDate || null,
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