import HotelDTO from "../../../DTO/managementServices/hotelDTO";
import create from "../../../repository/managementServices/hotel/create";

class createHotel {
    static async create(hotel: HotelDTO){
        return await create.Create(hotel);
    }
}

export default createHotel;