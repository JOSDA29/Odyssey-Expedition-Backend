import { Request, Response } from "express";
import getByEmail from '../../services/user/client/getByEmail';
import createUser from '../../repository/createUserGoogle'; 
import createUserDTO from '../../DTO/CreateUserGoogleDTO';
import generateToken from "../../helpers/generateToken";
import dotenv from 'dotenv';

dotenv.config();

const googleProtected = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName } = req.body;

    if (!email || !firstName || !lastName) {
      return res.status(400).json({
        status: 'Invalid input',
        message: 'Email, firstName, and lastName are required',
      });
    }

    const existingUser = await getByEmail.getByEmail(email);

    if (existingUser) {
      const payload = { email, role: 'Client' };
      const secret = process.env.SECRET as string;
      const token = generateToken(payload, secret, 60);

      return res.status(200).json({
        status: 'Usuario encontrado',
        token,
      });
    }

    const newUserDTO = new createUserDTO(email, firstName, lastName);
    const newUser = await createUser.create(newUserDTO);

    if (newUser) {
      const payload = { email, role: 'Client' };
      const secret = process.env.SECRET as string;
      const token = generateToken(payload, secret, 60); 

      return res.status(201).json({
        status: 'Usuario creado',
        token,
      });
    }

    return res.status(400).json({
      status: 'Error al crear el usuario',
    });

  } catch (error: any) {
    console.error('Error al iniciar sesión:', error.message);
    return res.status(500).json({
      status: 'Error en el servidor',
      message: error.message,
    });
  }
};

export default googleProtected;
