class Package {
    _origin: string;
    _destination: string;
    _departureDate: Date;
    _returnDate: Date;
    _numberOfPeople: number;
    _itinerary: string;
    _packageServices: string;
    _customerPreferences: string;
    _state: boolean;
    _fkHotelID: number;
    _fkTransportID: string;
    _status: string;
    _totalPrice: number;
    _fkAdviserEmail: string;
    
    constructor(
    _origin: string,
    _destination: string,
    _departureDate: Date,
    _returnDate: Date,
    _numberOfPeople: number,
    _itinerary: string,
    _packageServices: string,
    _customerPreferences: string,
    _state: boolean,
    _fkHotelID: number,
    _fkTransportID: string,
    _status: string,
    _totalPrice: number,
    _fkAdviserEmail: string,
    ){
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
    public get origin(): string {
        return this._origin;
    }

    public get destination(): string {
        return this._destination;
    }

    public get departureDate(): Date {
        return this._departureDate;
    }

    public get returnDate(): Date {
        return this._returnDate;
    }

    public get numberOfPeople(): number {
        return this._numberOfPeople;
    }

    public get itinerary(): string {
        return this._itinerary;
    }

    public get packageServices(): string {
        return this._packageServices;
    }

    public get customerPreferences(): string {
        return this._customerPreferences;
    }

    public get state(): boolean {
        return this._state;
    }

    public get fkHotelID(): number {
        return this._fkHotelID;
    }

    public get fkTransportID(): string {
        return this._fkTransportID;
    }

    public get status(): string {
        return this._status;
    }

    public get totalPrice(): number {
        return this._totalPrice;
    }

    public get fkAdviserEmail(): string {
        return this._fkAdviserEmail;
    }

    // Setters
    public set origin(value: string) {
        this._origin = value;
    }

    public set destination(value: string) {
        this._destination = value;
    }

    public set departureDate(value: Date) {
        this._departureDate = value;
    }

    public set returnDate(value: Date) {
        this._returnDate = value;
    }

    public set numberOfPeople(value: number) {
        this._numberOfPeople = value;
    }

    public set itinerary(value: string) {
        this._itinerary = value;
    }

    public set packageServices(value: string) {
        this._packageServices = value;
    }

    public set customerPreferences(value: string) {
        this._customerPreferences = value;
    }

    public set state(value: boolean) {
        this._state = value;
    }

    public set fkHotelID(value: number) {
        this._fkHotelID = value;
    }

    public set fkTransportID(value: string) {
        this._fkTransportID = value;
    }

    public set status(value: string) {
        this._status = value;
    }

    public set totalPrice(value: number) {
        this._totalPrice = value;
    }

    public set fkAdviserEmail(value: string) {
        this._fkAdviserEmail = value;
    }
}

export default Package;