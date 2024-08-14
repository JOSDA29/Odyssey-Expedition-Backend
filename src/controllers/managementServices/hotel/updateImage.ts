import { Request, Response } from "express";
import updateImageService from '../../../services/managementServices/hotel/updateImage';
import updateImageDTO from '../../../DTO/managementServices/hotel/updateImageDTO';
import { uploadImageToAzure } from "../../../config/azureBlobStorage";

const update = async (req: Request, res: Response) => {
    try {
        const {
            id,
            tokenEmail,
            file,
        } = req.body;

        if (!file) {
            return res
                .status(400)
                .json({ error: 'No file uploaded or invalid file format' });
        }

        const imageurl = await uploadImageToAzure(file);

        const result = await updateImageService.updateImage(new updateImageDTO(id, tokenEmail, imageurl));

        if(result){
            return res.status(200).json({
                status: 'Image Updating Successfully'
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

export default update;