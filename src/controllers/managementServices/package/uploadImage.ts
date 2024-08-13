import { Request, Response } from "express";
import uploadImageService from '../../../services/managementServices/package/uploadImage';
import { uploadImageToAzure } from "../../../config/azureBlobStorage";

const upload = async (req: Request, res: Response) => {
    try {
        const {id} = req.body;
        const file = req.file;

        if (!file) {
            return res
                .status(400)
                .json({ error: 'No file uploaded or invalid file format' });
        }

        const imageurl = await uploadImageToAzure(file);

        const result = await uploadImageService.Upload(id, imageurl);
        
        if(result){
            return res.status(201).json({
              status:  'Update image succesfully'
            });
        }
        return res.status(400).json({
            status: 'Bad Request'
        });
    } catch (error: any) {
        return res
            .status(500)
            .send({ error: 'Internal Server Error', errorInfo: error.message });
    }
}
export default upload;