class User {
    private _email: string;
    private _names?: string;
    private _lastNames?: string;
    private _phone?: string;
    private _image?: string;
    private _fkAdministratorEmail?: string;

    constructor(
        email: string,
        names?: string,
        lastNames?: string,
        phone?: string,
        image?: string,
        fkAdministratorEmail?: string,
    ) {
        this._email = email;
        this._names = names;
        this._lastNames = lastNames;
        this._phone = phone;
        this._image = image;
        this._fkAdministratorEmail = fkAdministratorEmail;
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
    get image(): string | undefined {
        return this._image;
    }
    set image(value: string | undefined) {
        this._image = value;
    }

    //Getter y Setter para la foranea de administrador que se va a utlizar en el asesor unicamente
    get fkAdministratorEmail(): string | undefined {
        return this._fkAdministratorEmail;
    }
    set fkAdministratorEmail(value: string | undefined) {
        this._fkAdministratorEmail = value;
    }
}

export default User;
