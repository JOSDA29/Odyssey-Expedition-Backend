import UpdateHotel from "../../../DTO/managementServices/hotel/updateDTO";
import Update from "../../../repository/managementServices/hotel/update";

class update {
    static async update(update: UpdateHotel){
        return await Update.updateHotel(update);
    }
}

export default update;