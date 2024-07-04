import { Response } from "express";

export const setTokenCookie = (res: Response, token: string ) => {
    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000 //La cookie tiene 10 minutos de vida
    });
};