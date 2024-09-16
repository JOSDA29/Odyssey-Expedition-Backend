class googleUser {
    private _email: string;
    private _firstName : string;
    private _lastName: string;
    constructor(
        _email: string, _firstName: string, _lastName: string,
    ){
        this._email = _email;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }

    public get email (): string {
        return this._email;
    }
    public get firstName (): string {
        return this._firstName;
    }
    public get lastName (): string {
        return this._lastName;
    }
    public set email(value: string) {
        this._email = value;
    }
    public set firstName(value: string){
        this._firstName = value;
    }
    public set lastName(value: string){
        this._lastName = value;
    }
}

export default googleUser;