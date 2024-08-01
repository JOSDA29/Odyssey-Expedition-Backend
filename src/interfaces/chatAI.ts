import { chatMessageInterface } from './chatMessage';

export interface chatAI {
    prompt: string;
    history: chatMessageInterface[];
}
