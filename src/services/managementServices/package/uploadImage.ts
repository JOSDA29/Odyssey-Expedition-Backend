import uploadImageRepository from '../../../repository/managementServices/package/uploadImage';

class uploadImage {
    static async Upload(id: number, file: string){
        return await uploadImageRepository.upload(id, file);
    }
}

export default uploadImage;