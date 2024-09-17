import { Request, Response } from "express";
import getByEmail from '../../services/user/client/getByEmail';
import createUser from '../../repository/createUserGoogle'; 
import createUserDTO from '../../DTO/CreateUserGoogleDTO';
import generateToken from "../../helpers/generateToken";
import dotenv from 'dotenv';
import '../../config/passportConfig';
dotenv.config();

const googleProtected = async (req: Request, res: Response) => {
    try {
      const profile = req.user as any;
  
      const email = profile.email;
      const firstName = profile.firstName;
      const lastName = profile.lastName;

      
      const existingUser = await getByEmail.getByEmail(email);
      const payload = {
        email, firstName, lastName,
      };
      
      const secret = process.env.SECRET as string;
      const token = generateToken(payload, secret, 15);
      
      if (existingUser) {
        return res.status(200).json({
          status: 'Usuario encontrado',
          user: existingUser,
          token: token
        });
      } else {
        const newUser = await createUser.create(new createUserDTO(email, firstName, lastName));
        return res.status(201).json({
          status: 'Usuario creado',
          user: newUser,
          token: token
        });
      }
    } catch (error: any) {
      console.error('Error en googleProtected:', error);
      return res.status(500).json({
        status: 'Error en el servidor',
        error: error.message
      });
    }
  };

export default googleProtected;
