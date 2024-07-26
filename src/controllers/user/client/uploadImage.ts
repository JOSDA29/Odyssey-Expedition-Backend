import { Request, Response } from "express";
import uploadImageR from "../../../repository/user/client/uploadImage";

const uploadImage = async (req: Request, res: Response) => {
  try {
    const { tokenEmail } = req.body;
    const file = req.file;

    // Confirmar que el email ha sido recibido
    console.log('Email from token:', tokenEmail);
    console.log('req.body:', req.body); // Para ver todo el cuerpo de la solicitud
    console.log('req.file:', req.file); // Para asegurarnos de que el archivo está presente

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    const result = await uploadImageR.upload(tokenEmail, file.buffer);
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
