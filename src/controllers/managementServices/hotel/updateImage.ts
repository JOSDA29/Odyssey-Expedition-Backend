import { Request, Response } from "express";
import updateImageService from '../../../services/managementServices/hotel/updateImage';
import updateImageDTO from '../../../DTO/managementServices/hotel/updateImageDTO';

const update = async (req: Request, res: Response) => {
    try {
        const {
            id,
            tokenEmail,
            image,
        } = req.body;
        const result = await updateImageService.updateImage(new updateImageDTO(id, tokenEmail, image));
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