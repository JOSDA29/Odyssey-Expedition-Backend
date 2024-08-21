import { Request, Response } from "express";
import uploadImageService from '../../../services/user/adviser/uploadImage';
import { uploadImageToAzure } from "../../../config/azureBlobStorage";

const UploadImage = async (req: Request, res: Response) => {
    try {
        const { tokenEmail } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded or invalid file format' });
          }

        const imageUrl = await uploadImageToAzure(file);

        const result = await uploadImageService.upload(tokenEmail, imageUrl);

        if(result.success) {
            return res.status(201).json({ message: result.message });
        }
        return res.status(400).json({ message: result.message });
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}

export default UploadImage;