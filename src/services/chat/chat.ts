import chatConfig from '../../config/chat/chatConfig';
import chatDto from '../../DTO/chat/chat';
import { GoogleGenerativeAI, Content } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const { GenerationConfig, StartChat } = chatConfig;
const APIKEYGEMINI = process.env.APIKEYGEMINI;

const genAI = new GoogleGenerativeAI(APIKEYGEMINI as string);
const model = genAI.getGenerativeModel({ model: 'gemini 1.5 flash' });

const VALIDTHEMES = [
    'turismo en colombia',
    'comidas tipicas de colombia',
    'lugares turisticos de colmbia',
];
const INVALIDTHEMES = [
    'turismo fuera de colombia',
    'comidas tipicas en paises diferentes a colombia',
    'religion',
    'politica',
];

const validTheme = (text: string, themes: string[]): boolean => {
    return themes.some((theme) =>
        text.toLowerCase().includes(theme.toLowerCase()),
    );
};

const isValidResponse = (response: string): boolean => {
    return (
        validTheme(response, VALIDTHEMES) &&
        !validTheme(response, INVALIDTHEMES)
    );
};

export const chatService = async (chatAI: chatDto) => {
    const historyChat: Content[] = StartChat.concat(chatAI.history)
        .map((msg) => {
            if (msg.role && ['user', 'model'].includes(msg.role)) {
                return {
                    role: msg.role,
                    parts: [{ text: msg.parts }],
                } as Content;
            } else {
                console.error('Mensaje inválido en history:', msg);
                return undefined;
            }
        })
        .filter((msg): msg is Content => msg !== undefined);

    historyChat.push({
        role: 'user',
        parts: [{ text: chatAI.prompt }],
    });

    try {
        const chat = model.startChat({
            history: historyChat,
            generationConfig: GenerationConfig,
        });

        const sendPrompt = await chat.sendMessage(chatAI.prompt);
        const response = sendPrompt.response;
        const text = response.text();

        if (isValidResponse(text)) {
            return { response: text };
        } else {
            throw new Error(
                'No existe relacion de la pregunta con los temas permitidos',
            );
        }
    } catch (error) {
        console.error('Error en el servicio de chat:', error);
        throw error;
    }
};
