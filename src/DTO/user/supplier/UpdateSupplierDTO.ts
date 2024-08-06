class UpdateSupplierDTO {
    private _supplierID: string;
    private _email: string;
    private _schedule: string | null;
    private _address: string | null;
    private _phone: string;

    constructor(
        supplierID: string,
        email: string,
        schedule: string | null,
        address: string | null,
        phone: string
    ) {
        this._supplierID = supplierID;
        this._email = email;
        this._schedule = schedule;
        this._address = address;
        this._phone = phone;
    }

    public get supplierID(): string {
        return this._supplierID;
    }

    public set supplierID(value: string) {
        this._supplierID = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get schedule(): string | null {
        return this._schedule;
    }

    public set schedule(value: string | null) {
        this._schedule = value;
    }

    public get address(): string | null {
        return this._address;
    }

    public set address(value: string | null) {
        this._address = value;
    }

    public get phone(): string {
        return this._phone;
    }

    public set phone(value: string) {
        this._phone = value;
    }
}


export default UpdateSupplierDTO;
