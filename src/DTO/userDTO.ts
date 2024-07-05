class User {
    private _id: string;
    private _names?: string;
    private _lastNames?: string;
    private _email?: string;
    private _password?: string;
    private _phone?: string;
    private _image?: string;
    private _fkAdministratorId?: string;

    constructor(
        id: string,
        names?: string,
        lastNames?: string,
        email?: string,
        password?: string,
        phone?: string,
        image?: string,
        fkAdministratorId?: string
    ) {
        this._id = id;
        this._names = names;
        this._lastNames = lastNames;
        this._email = email;
        this._password = password;
        this._phone = phone;
        this._image = image;
        this._fkAdministratorId = fkAdministratorId;
    }

    //Getter y Setter para 'id'
    get id(): string | undefined {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
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

    //Getter y Setter para 'email'
    get email(): string | undefined{
        return this._email;
    }
    set email(value: string | undefined){
        this._email = value;
    }

    // Getter y Setter para 'password'
    get password(): string | undefined {
        return this._password;
    }
    set password(value: string | undefined) {
        this._password = value;
    }

    // Getter y Setter para 'phone'
    get phone(): string | undefined {
        return this._phone;
    }
    set phone(value: string | undefined) {
        this._phone = value;
    }

    // Getter y Setter para 'image'
    get image(): string | undefined {
        return this._image;
    }
    set image(value: string | undefined) {
        this._image = value;
    }

    //Getter y Setter para la foranea de administrador que se va a utlizar en el asesor unicamente
    get fkAdministratorId(): string | undefined {
        return this._fkAdministratorId;
    }
    set fkAdministratorId(value: string | undefined) {
        this._fkAdministratorId = value;
    }
}

export default User;
