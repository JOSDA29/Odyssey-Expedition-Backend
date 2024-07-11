import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import Auth from "../DTO/authDTO";
import { setTokenCookie } from "../middlewares/cookieMiddleware";

let auth = async(req:Request, res:Response) => {
    try {
        const {email, password} = req.body;
        
        const token: any = await  AuthService.auth(new Auth(email, password));
        
        setTokenCookie(res, token)
        if (token) {
            return res.status(200).json({ 
                status: 'Successful authentication',
                AccesToken : token
            });
        }

        return res.status(401).json({ 
            status: 'Invalid email or password'
        });

    } catch (error) {
        return res.status(500).send({ errorInfo: "Internal Server Error", error });
    }
}


export default auth;