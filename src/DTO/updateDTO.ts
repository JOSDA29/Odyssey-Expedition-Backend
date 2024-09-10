class User {
    private _email: string;
    private _names?: string;
    private _lastNames?: string;
    private _phone?: string;
    private _state?: boolean;
    private _id?: string;

    constructor(
        email: string,
        id?: string,
        names?: string,
        lastNames?: string,
        phone?: string,
        state?: boolean,
    ) {
        this._email = email;
        this._names = names;
        this._lastNames = lastNames;
        this._phone = phone;
        this._state = state;
        this._id = id;
    }

    //Getter y Setter para 'email'
    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    // Getter y Setter para 'names'
    get names(): string | undefined {
        return this._names;
    }
    set names(value: string | undefined) {
        this._names = value;
    }

    // Getter y Setter para 'lastNames'
    get lastNames(): string | undefined {
        return this._lastNames;
    }
    set lastNames(value: string | undefined) {
        this._lastNames = value;
    }

    // Getter y Setter para 'phone'
    get phone(): string | undefined {
        return this._phone;
    }
    set phone(value: string | undefined) {
        this._phone = value;
    }

    // Getter y Setter para 'image'
    get state(): boolean | undefined {
        return this._state;
    }
    set state(value: boolean | undefined) {
        this._state = value;
    }

    get id(): string | undefined{
        return this._id;
    }

    set id(value: string | undefined) {
        this.id = value;
    }
}

export default User;
