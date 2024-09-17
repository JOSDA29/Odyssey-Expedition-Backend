import chatDto from '../../DTO/chat/chat';
import { chatAI } from '../../interfaces/chat/chatAI';
import { Request, Response } from 'express';
import { chatService } from '../../services/chat/chat';

export const chatController = async (req: Request, res: Response) => {
    const dates: chatAI = req.body;

    const chat = new chatDto(dates.history, dates.prompt);

    try {
        const updateHistory = await chatService(chat);
        res.status(200).json({ history: updateHistory });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                error: error.stack,
                message: error.message,
            });
        } else {
            res.status(500).json({
                error: 'Error desconocido',
            });
        }
    }
};
