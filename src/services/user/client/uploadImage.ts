import uploadImageR from '../../../repository/user/client/uploadImage';

class uploadImage {
    static async UploadImage(email: string, file: string) {
        const result = await uploadImageR.upload(email, file);
        if (result.rowCount!>0) {
            return true;
        }

        return false;
    }
}

export default uploadImage;
