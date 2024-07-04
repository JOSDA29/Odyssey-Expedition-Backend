class User {
    private _nombre?: string;
    private _apellido?: string;
    private _contrasenia?: string;
    private _telefono?: string;
    private _imagen?: string;

    constructor(
        nombre?: string,
        apellido?: string,
        contrasenia?: string,
        telefono?: string,
        imagen?: string
    ) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._contrasenia = contrasenia;
        this._telefono = telefono;
        this._imagen = imagen;
    }

    // Getter y Setter para 'nombre'
    get nombre(): string | undefined {
        return this._nombre;
    }
    set nombre(value: string | undefined) {
        this._nombre = value;
    }

    // Getter y Setter para 'apellido'
    get apellido(): string | undefined {
        return this._apellido;
    }
    set apellido(value: string | undefined) {
        this._apellido = value;
    }

    // Getter y Setter para 'contrasenia'
    get contrasenia(): string | undefined {
        return this._contrasenia;
    }
    set contrasenia(value: string | undefined) {
        this._contrasenia = value;
    }

    // Getter y Setter para 'telefono'
    get telefono(): string | undefined {
        return this._telefono;
    }
    set telefono(value: string | undefined) {
        this._telefono = value;
    }

    // Getter y Setter para 'imagen'
    get imagen(): string | undefined {
        return this._imagen;
    }
    set imagen(value: string | undefined) {
        this._imagen = value;
    }
}
