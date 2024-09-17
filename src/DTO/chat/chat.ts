import { chatMessageInterface } from '../../interfaces/chat/chatMessage';

export default class chatDto {
    private _history: chatMessageInterface[];
    private _prompt: string;

    constructor(history: chatMessageInterface[], prompt: string) {
        this._history = history;
        this._prompt = prompt;
    }

    //GETTERS   
    get history(): chatMessageInterface[] {
        return this._history;
    }
    get prompt(): string {
        return this._prompt;
    }

    //SETTERS
    set history(value: chatMessageInterface[]) {
        this._history = value;
    }
    set prompt(value: string) {
        this._prompt = value;
    }
}
