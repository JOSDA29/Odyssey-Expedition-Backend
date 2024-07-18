import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import Auth from "../DTO/authDTO";

let auth = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        
        const token: any = await  AuthService.auth(new Auth(email, password));
        if (token) {
            return res.status(200).json({
                status: 'Successful authentication',
                AccessToken: token
            });
        }

        return res.status(401).json({
            status: 'Invalid email or password'
        });
        
    } catch (error: any) {
        return res.status(500).send({ error: "Internal Server Error", errorInfo: error.message });
    }
}

export default auth;
