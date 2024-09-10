class Update {
    private _id: number;
    private _origin?: string;
    private _destination?: string;
    private _departureDate?: Date;
    private _returnDate?: Date;
    private _numberOfPeople?: number;
    private _itinerary?: string;
    private _customerPreferences?: string;
    private _state?: boolean;
    private _fkAdviserEmail?: string;

    constructor(
        _id: number,
        _origin?: string,
        _destination?: string,
        _departureDate?: Date,
        _returnDate?: Date,
        _numberOfPeople?: number,
        _itinerary?: string,
        _customerPreferences?: string,
        _state?: boolean,
        _fkAdviserEmail?: string,
    ) {
        this._id = _id;
        this._origin = _origin;
        this._destination = _destination;
        this._departureDate = _departureDate;
        this._returnDate = _returnDate;
        this._numberOfPeople = _numberOfPeople;
        this._itinerary = _itinerary;
        this._customerPreferences = _customerPreferences;
        this._state = _state;
        this._fkAdviserEmail = _fkAdviserEmail;
    }

    // Getters
    public get id(): number {
        return this._id;
    }

    public get origin(): string | undefined {
        return this._origin;
    }

    public get destination(): string | undefined {
        return this._destination;
    }

    public get departureDate(): Date | undefined {
        return this._departureDate;
    }

    public get returnDate(): Date | undefined {
        return this._returnDate;
    }

    public get numberOfPeople(): number | undefined {
        return this._numberOfPeople;
    }

    public get itinerary(): string | undefined {
        return this._itinerary;
    }

    public get customerPreferences(): string | undefined {
        return this._customerPreferences;
    }

    public get state(): boolean | undefined {
        return this._state;
    }

    public get fkAdviserEmail(): string | undefined {
        return this._fkAdviserEmail;
    }

    // Setters
    public set id(value: number) {
        this._id = value;
    }

    public set origin(value: string | undefined) {
        this._origin = value;
    }

    public set destination(value: string | undefined) {
        this._destination = value;
    }

    public set departureDate(value: Date | undefined) {
        this._departureDate = value;
    }

    public set returnDate(value: Date | undefined) {
        this._returnDate = value;
    }

    public set numberOfPeople(value: number | undefined) {
        this._numberOfPeople = value;
    }

    public set itinerary(value: string | undefined) {
        this._itinerary = value;
    }

    public set customerPreferences(value: string | undefined) {
        this._customerPreferences = value;
    }

    public set state(value: boolean | undefined) {
        this._state = value;
    }

    public set fkAdviserEmail(value: string | undefined) {
        this._fkAdviserEmail = value;
    }
}

export default Update;
