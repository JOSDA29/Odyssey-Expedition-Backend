class TransportDTO {
    private _transportID: string;
    private _transporttype: string;
    private _company: string;
    private _origin: string;
    private _destination: string;
    private _arrivalDate: Date;
    private _departureDate: Date;
    private _numberOfPeople: number;
    private _price: number;
    private _trackNumber?: string;
    private _imageURL?: string;
    private _state: boolean;
    private _fkAdviserEmail?: string;

    constructor(
        transportID: string,
        transporttype: string,
        company: string,
        origin: string,
        destination: string,
        arrivalDate: Date,
        departureDate: Date,
        numberOfPeople: number,
        price: number,
        state: boolean = true,
        trackNumber?: string,
        fkAdviserEmail?: string,
        imageURL?: string
    ) {
        this._transportID = transportID;
        this._transporttype = transporttype;
        this._company = company;
        this._origin = origin;
        this._destination = destination;
        this._arrivalDate = arrivalDate;
        this._departureDate = departureDate;
        this._numberOfPeople = numberOfPeople;
        this._price = price;
        this._trackNumber = trackNumber;
        this._imageURL = imageURL;
        this._state = state;
        this._fkAdviserEmail = fkAdviserEmail;
    }

    // Getters and Setters
    public get transportID(): string {
        return this._transportID;
    }

    public set transportID(value: string) {
        this._transportID = value;
    }

    public get transporttype(): string {
        return this._transporttype;
    }

    public set transporttype(value: string) {
        this._transporttype = value;
    }

    public get company(): string {
        return this._company;
    }

    public set company(value: string) {
        this._company = value;
    }

    public get origin(): string {
        return this._origin;
    }

    public set origin(value: string) {
        this._origin = value;
    }

    public get destination(): string {
        return this._destination;
    }

    public set destination(value: string) {
        this._destination = value;
    }

    public get arrivalDate(): Date {
        return this._arrivalDate;
    }

    public set arrivalDate(value: Date) {
        this._arrivalDate = value;
    }

    public get departureDate(): Date {
        return this._departureDate;
    }

    public set departureDate(value: Date) {
        this._departureDate = value;
    }

    public get numberOfPeople(): number {
        return this._numberOfPeople;
    }

    public set numberOfPeople(value: number) {
        this._numberOfPeople = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get trackNumber(): string | undefined {
        return this._trackNumber;
    }

    public set trackNumber(value: string | undefined) {
        this._trackNumber = value;
    }

    public get imageURL(): string | undefined {
        return this._imageURL;
    }

    public set imageURL(value: string | undefined) {
        this._imageURL = value;
    }

    public get state(): boolean {
        return this._state;
    }

    public set state(value: boolean) {
        this._state = value;
    }

    public get fkAdviserEmail(): string | undefined {
        return this._fkAdviserEmail;
    }

    public set fkAdviserEmail(value: string | undefined) {
        this._fkAdviserEmail = value;
    }
}

export default TransportDTO;
