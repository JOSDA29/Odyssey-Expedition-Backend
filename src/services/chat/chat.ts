import chatConfig from '../../config/chat/chatConfig';
import chatDto from '../../DTO/chat/chat';
import {
    isValidResponse,
    parseResponseToList
} from '../../helpers/chat/validators';
import { Content } from '@google/generative-ai';
import model from '../../config/chat/model';

const { GenerationConfig, StartChat, StartChatResponses } = chatConfig;

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

    const predefinedResponse = Array.from(StartChatResponses.keys()).find(key => chatAI.prompt.toLowerCase().includes(key));
    if (predefinedResponse) {
        const response = StartChatResponses.get(predefinedResponse);
        return {response: response?.parts};
    }

    try {
        const chat = model.startChat({
            history: historyChat,
            generationConfig: GenerationConfig,
        });
        const conditionCountry = 'La respuesta debe estar basada en Colombia';
        const conditionEnterprise = 'Servicios de Oddysey Expedition';

        const sendPrompt = await chat.sendMessage(
            chatAI.prompt + conditionCountry ||
                chatAI.prompt + conditionEnterprise,
        );
        const response = sendPrompt.response;
        const text = response.text();

        // Verificación si la respuesta es válida según los temas permitidos
        if (isValidResponse(text)) {
            if (
                text.toLowerCase().includes('lista') ||
                text.toLowerCase().includes('dame una lista')
            ) {
                const listResponse = parseResponseToList(text);
                return { response: listResponse };
            } else {
                const response = text;
                return { response: response };
            }
        } else {
            return 'No puedo ayudarte con tu solicitud, por favor comunicate con un asesor';
        }
    } catch (error) {
        console.error('Error en el envío del mensaje:', error);
        throw error; // Re-lanzar el error para que sea manejado en el controlador
    }
};
