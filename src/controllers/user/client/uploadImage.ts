import { Request, Response } from "express";
import uploadImageR from "../../../services/user/client/uploadImage";
import { uploadImageToAzure } from "../../../config/azureBlobStorage";

const uploadImage = async (req: Request, res: Response) => {
  try {
    const { tokenEmail } = req.body;
    const file = req.file;
    
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    const imageUrl = await uploadImageToAzure(file);

    const result = await uploadImageR.UploadImage(tokenEmail, imageUrl);

    if (result.success) {
      return res.status(202).json({ status: "Upload Image Successfully" });
    } else {
      return res.status(500).json({ error: 'Error uploading image' });
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default uploadImage;
