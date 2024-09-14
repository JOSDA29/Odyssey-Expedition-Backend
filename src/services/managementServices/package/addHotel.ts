import addHotelRepository from "../../../repository/managementServices/package/addHotel";


class AddHotel {
    static async addHotel (idPackage:number, idHotel:number) {
        try {
            const result = addHotelRepository.addService(idPackage, idHotel);
            return result;

        } catch (error) {
            console.error('Internal error when trying add service to package.' + (error as Error).stack);
            throw new Error('Internal error when trying add service to package.' + (error as Error).message);
        }
       
    }
}

export default AddHotel;