import updateImageDTO from '../../../DTO/managementServices/hotel/updateImageDTO';
import updateRespository from '../../../repository/managementServices/hotel/uploadImage';

class updateImage{
    static async updateImage(update: updateImageDTO){
        return await updateRespository.uploadImage(update);
    }
}

export default updateImage;