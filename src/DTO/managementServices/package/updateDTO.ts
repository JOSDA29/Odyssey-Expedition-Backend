class Update {
    private _id: number;
    private _origin?: string;
    private _destination?: string;
    private _departureDate?: Date;
    private _returnDate?: Date;
    private _numberOfPeople?: number;
    private _itinerary?: string;
    private _packageServices?: string;
    private _customerPreferences?: string;
    private _state?: boolean;
    private _fkHotelID?: number;
    private _fkTransportID?: string;
    private _status?: string;
    private _totalPrice?: number;
    private _fkAdviserEmail?: string;

    constructor(
        _id: number,
        _origin?: string,
        _destination?: string,
        _departureDate?: Date,
        _returnDate?: Date,
        _numberOfPeople?: number,
        _itinerary?: string,
        _packageServices?: string,
        _customerPreferences?: string,
        _state?: boolean,
        _fkHotelID?: number,
        _fkTransportID?: string,
        _status?: string,
        _totalPrice?: number,
        _fkAdviserEmail?: string,
    ) {
        this._id = _id;
        this._origin = _origin;
        this._destination = _destination;
        this._departureDate = _departureDate;
        this._returnDate = _returnDate;
        this._numberOfPeople = _numberOfPeople;
        this._itinerary = _itinerary;
        this._packageServices = _packageServices;
        this._customerPreferences = _customerPreferences;
        this._state = _state;
        this._fkHotelID = _fkHotelID;
        this._fkTransportID = _fkTransportID;
        this._status = _status;
        this._totalPrice = _totalPrice;
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

    public get packageServices(): string | undefined {
        return this._packageServices;
    }

    public get customerPreferences(): string | undefined {
        return this._customerPreferences;
    }

    public get state(): boolean | undefined {
        return this._state;
    }

    public get fkHotelID(): number | undefined {
        return this._fkHotelID;
    }

    public get fkTransportID(): string | undefined {
        return this._fkTransportID;
    }

    public get status(): string | undefined {
        return this._status;
    }

    public get totalPrice(): number | undefined {
        return this._totalPrice;
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

    public set packageServices(value: string | undefined) {
        this._packageServices = value;
    }

    public set customerPreferences(value: string | undefined) {
        this._customerPreferences = value;
    }

    public set state(value: boolean | undefined) {
        this._state = value;
    }

    public set fkHotelID(value: number | undefined) {
        this._fkHotelID = value;
    }

    public set fkTransportID(value: string | undefined) {
        this._fkTransportID = value;
    }

    public set status(value: string | undefined) {
        this._status = value;
    }

    public set totalPrice(value: number | undefined) {
        this._totalPrice = value;
    }

    public set fkAdviserEmail(value: string | undefined) {
        this._fkAdviserEmail = value;
    }
}

export default Update;
