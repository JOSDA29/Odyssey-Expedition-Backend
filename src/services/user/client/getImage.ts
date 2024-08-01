import GetImage from '../../../repository/user/client/getImage';
class getImageService {
    static async getimage(email: string) {
        return await GetImage.get(email);
    }
}

export default getImageService;
