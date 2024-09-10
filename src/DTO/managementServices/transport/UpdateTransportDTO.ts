class UpdateTransportDTO {
    private _transportID: string;
    private _origin?: string;
    private _destination?: string;
    private _arrivalDate?: Date;
    private _departureDate?: Date;
    private _numberOfPeople?: number;
    private _price?: number;
    private _trackNumber?: string;
    private _state?: boolean;

    constructor(
        transportID: string,
        origin?: string,
        destination?: string,
        arrivalDate?: Date,
        departureDate?: Date,
        numberOfPeople?: number,
        price?: number,
        trackNumber?: string,
        state?: boolean
    ) {
        this._origin = origin;
        this._transportID = transportID;
        this._destination = destination;
        this._arrivalDate = arrivalDate;
        this._departureDate = departureDate;
        this._numberOfPeople = numberOfPeople;
        this._price = price;
        this._trackNumber = trackNumber;
        this._state = state;
    }

    // Getters and Setters

    public get origin(): string | undefined {
        return this._origin;
    }

    public set origin(value: string | undefined) {
        this._origin = value;
    }

    public get transportID(): string {
        return this._transportID;
    }

    public set transportID(value: string) {
        this._transportID = value;
    }

    public get destination(): string | undefined {
        return this._destination;
    }

    public set destination(value: string | undefined) {
        this._destination = value;
    }

    public get arrivalDate(): Date | undefined {
        return this._arrivalDate;
    }

    public set arrivalDate(value: Date | undefined) {
        this._arrivalDate = value;
    }

    public get departureDate(): Date | undefined {
        return this._departureDate;
    }

    public set departureDate(value: Date | undefined) {
        this._departureDate = value;
    }

    public get numberOfPeople(): number | undefined {
        return this._numberOfPeople;
    }

    public set numberOfPeople(value: number | undefined) {
        this._numberOfPeople = value;
    }

    public get price(): number | undefined {
        return this._price;
    }

    public set price(value: number | undefined) {
        this._price = value;
    }

    public get trackNumber(): string | undefined {
        return this._trackNumber;
    }

    public set trackNumber(value: string | undefined) {
        this._trackNumber = value;
    }

    public get state(): boolean | undefined {
        return this._state;
    }

    public set state(value: boolean | undefined) {
        this._state = value;
    }
}

export default UpdateTransportDTO;
