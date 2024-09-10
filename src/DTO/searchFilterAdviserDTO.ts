class SearchFilterDTO {
    private _id: string | null;
    private _firstname: string | null;
    private _lastName: string | null;
    private _email: string | null;
    private _phoneNumber: string | null;

    constructor(
        _firstname: string | null,
        _lastName: string | null,
        _email: string | null,
        _phoneNumber: string | null,
        _id: string | null,
    ) {
        this._id = _id;
        this._firstname = _firstname;
        this._lastName = _lastName;
        this._email = _email;
        this._phoneNumber = _phoneNumber;
    }

    public get id(): any {
        return this._id;
    }

    public set id(value: string | null) {
        this._id = value;
    }

    public get email(): string | null {
        return this._email;
    }

    public set email(_email: string) {
        this._email = _email;
    }

    public get firstname(): string | null {
        return this._firstname;
    }

    public set firstname(_firstname: string) {
        this._firstname = _firstname;
    }

    public get last_Name(): string | null {
        return this._lastName;
    }

    public set last_Name(last_Name: string) {
        this._lastName = last_Name;
    }

    public get phoneNumber(): string | null | undefined {
        return this._phoneNumber;
    }

    public set phoneNumber(_phoneNumber: string | null) {
        this._phoneNumber = _phoneNumber;
    }
}

export default SearchFilterDTO;
