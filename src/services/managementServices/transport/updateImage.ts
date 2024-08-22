import updateImageDTO from '../../../DTO/managementServices/transport/updateImageDTO';
import UpdateImageRepository from '../../../repository/managementServices/transport/updateImage';

class updateImage {
    static async updateImage(update: updateImageDTO) {
        const success = await UpdateImageRepository.updateImage(update);

        if (!success) {
            return false;
        }

        return true;
    }
}

export default updateImage;
