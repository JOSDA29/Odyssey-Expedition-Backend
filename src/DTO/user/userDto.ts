class UserDto {
    private _id?: string;
    private _name: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _phoneNumber?: string;
    private _email_Admin?: string;

    constructor(
        _name: string,
        last_Name: string,
        _email: string,
        _password: string,
        _phoneNumber?: string,
        _id?: string,
        _email_Admin?: string,
    ) {
        this._id = _id;
        this._name = _name;
        this._lastName = last_Name;
        this._email = _email;
        this._password = _password;
        this._phoneNumber = _phoneNumber;
        this._email_Admin = _email_Admin;
    }

    public get id(): any {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(_email: string) {
        this._email = _email;
    }

    public get password(): string {
        return this._password;
    }

    public set password(_password: string) {
        this._password = _password;
    }

    public get name(): string {
        return this._name;
    }

    public set name(_name: string) {
        this._name = _name;
    }

    public get last_Name(): string {
        return this._lastName;
    }

    public set last_Name(last_Name: string) {
        this._lastName = last_Name;
    }

    public get phoneNumber(): string | undefined {
        return this._phoneNumber;
    }

    public set phoneNumber(_phoneNumber: string) {
        this._phoneNumber = _phoneNumber;
    }

    public get email_Admin(): any {
        return this._email_Admin;
    }
    public set email_Admin(_email_Admin: string) {
        this._email_Admin = _email_Admin;
    }
}
export default UserDto;
