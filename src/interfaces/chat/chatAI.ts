import { chatMessageInterface } from '../chat/chatMessage';

export interface chatAI {
    prompt: string;
    history: chatMessageInterface[];
}
