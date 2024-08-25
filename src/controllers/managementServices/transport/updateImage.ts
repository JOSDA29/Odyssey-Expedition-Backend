import { Request, Response } from "express";
import updateImageService from '../../../services/managementServices/transport/updateImage';
import updateImageDTO from '../../../DTO/managementServices/transport/updateImageDTO';
import { uploadImageToAzure } from "../../../config/azureBlobStorage";

const updateImage = async (req: Request, res: Response) => {
    try {
        const { id, tokenEmail } = req.body; 
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded or invalid file format' });
        }

        const imageUrl = await uploadImageToAzure(file);
        
        const result = await updateImageService.updateImage(new updateImageDTO(id, tokenEmail, imageUrl));

        if (result) {
            return res.status(200).json({
                status: 'Image Updated Successfully'
            });
        }

        return res.status(404).json({
            error: 'Transport ID not found'
        });
    } catch (error: any) {
        return res.status(500).send({
            error: 'Internal Server Error',
            errorInfo: error.message
        });
    }
}

export default updateImage;
