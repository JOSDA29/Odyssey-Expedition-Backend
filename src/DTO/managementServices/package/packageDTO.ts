class Package {
    _origin: string;
    _destination: string;
    _departureDate: Date;
    _returnDate: Date;
    _numberOfPeople: number;
    _itinerary: string;
    _customerPreferences: string;
    _state: boolean;
    _fkAdviserEmail: string;
    _namePackage?: string; 
    
    constructor(
        _origin: string,
        _destination: string,
        _departureDate: Date,
        _returnDate: Date,
        _numberOfPeople: number,
        _itinerary: string,
        _customerPreferences: string,
        _state: boolean,
        _fkAdviserEmail: string,
        _namePackage?: string 
    ) {
        this._origin = _origin;
        this._destination = _destination;
        this._departureDate = _departureDate;
        this._returnDate = _returnDate;
        this._numberOfPeople = _numberOfPeople;
        this._itinerary = _itinerary;
        this._customerPreferences = _customerPreferences;
        this._state = _state;
        this._fkAdviserEmail = _fkAdviserEmail;
        this._namePackage = _namePackage;
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

    public get customerPreferences(): string {
        return this._customerPreferences;
    }

    public get state(): boolean {
        return this._state;
    }

    public get fkAdviserEmail(): string {
        return this._fkAdviserEmail;
    }

    public get namePackage(): string | undefined {
        return this._namePackage;
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

    public set customerPreferences(value: string) {
        this._customerPreferences = value;
    }

    public set state(value: boolean) {
        this._state = value;
    }

    public set fkAdviserEmail(value: string) {
        this._fkAdviserEmail = value;
    }

    public set namePackage(value: string | undefined) {
        this._namePackage = value;
    }
}

export default Package;
