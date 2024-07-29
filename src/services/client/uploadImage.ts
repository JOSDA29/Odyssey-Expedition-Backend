import uploadImageR from "../../repository/user/client/uploadImage";

class uploadImage{
    static async UploadImage(email: string, file: string,){
        return await uploadImageR.upload(email, file);
    }
}

export default uploadImage;