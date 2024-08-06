class SearchSupplierDTO {
    private _supplierID: string | null;
    private _companyName: string | null;
    private _email: string | null;
    private _phone: string | null;

    constructor(
        supplierID: string | null,
        companyName: string | null,
        email: string | null,
        phone: string | null
    ) {
        this._supplierID = supplierID;
        this._companyName = companyName;
        this._email = email;
        this._phone = phone;
    }

    // Getter y Setter para supplierID
    public get supplierID(): string | null {
        return this._supplierID;
    }

    public set supplierID(value: string | null) {
        this._supplierID = value;
    }

    // Getter y Setter para companyName
    public get companyName(): string | null {
        return this._companyName;
    }

    public set companyName(value: string | null) {
        this._companyName = value;
    }

    // Getter y Setter para email
    public get email(): string | null {
        return this._email;
    }

    public set email(value: string | null) {
        this._email = value;
    }

    // Getter y Setter para phone
    public get phone(): string | null {
        return this._phone;
    }

    public set phone(value: string | null) {
        this._phone = value;
    }
}

export default SearchSupplierDTO;
