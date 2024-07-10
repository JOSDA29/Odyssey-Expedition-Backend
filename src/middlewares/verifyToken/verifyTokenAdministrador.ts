import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
    data: {role: string},
    exp: number,
    iat: number
}

const verifyTokenAdministrador = async (req: Request, res: Response, next: NextFunction ) => {
    try {

        const token = req.cookies.token; 

        if(token){
            let decoded = jwt.verify(token, process.env.SECRET as string) as JwtPayload;
            const role = decoded.data.role;

            if (role == 'Administrator') {
                return next();
            } else {
                return res.status(401).json({ status: 'unauthorized, required role: Administrator'})
            }
        }

        return res.status(401).json({ status: 'You dont send token'});

    } catch (error: any) {
        return res.status(403).json({ status: 'Invalid Token', error: error.message });
    }
}

export default verifyTokenAdministrador;