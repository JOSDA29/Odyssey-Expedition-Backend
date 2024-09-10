import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
    data: { role: string; email: string };
    exp: number;
    iat: number;
}
const validateToken = (allowedRoles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            //Formato Bearer esperado del token
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ status: 'You dont send token' });
            }

            const decoded = jwt.verify(
                token,
                process.env.SECRET as string,
            ) as JwtPayload;
            const userRole = decoded.data.role;

            if (!allowedRoles.includes(userRole)) {
                return res.status(403).json({ status: 'Access denied' });
            }

            req.body.tokenEmail = decoded.data.email;
            req.body.tokenRole = decoded.data.role;

            return next();
        } catch (error: any) {
            return res
                .status(403)
                .json({ status: 'Invalid Token', error: error.message });
        }
    };
};

export default validateToken;
