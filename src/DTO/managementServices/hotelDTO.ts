class Hotel {
    private _name: string;
    private _destination: string;
    private _startDate: Date;
    private _endDate: Date;
    private _numberOfPeople: number;
    private _room: string;
    private _description: string;
    private _location: string;
    private _hotelServices: string;
    private _price: number;
    private _fkAdvisorEmail: string;
    private _state?: boolean;

    constructor(
        _name: string, 
        _destination: string, 
        _startDate: Date, 
        _endDate: Date, 
        _numberOfPeople: number, 
        _room: string, 
        _description: string, 
        _location: string, 
        _hotelServices: string, 
        _price: number, 
        _fkAdvisorEmail: string,
        _state?: boolean
    ){
        this._name= _name;
        this._destination= _destination;
        this._startDate= _startDate;
        this._endDate= _endDate;
        this._numberOfPeople= _numberOfPeople;
        this._room= _room;
        this._description= _description;
        this._location= _location;
        this._hotelServices= _hotelServices;
        this._state= _state;
        this._price= _price;
        this._fkAdvisorEmail= _fkAdvisorEmail;
    }

    //GETTERS Y SETTERS
    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get destination(): string {
        return this._destination;
    }

    public set destination(value: string) {
        this._destination = value;
    }

    public get startDate(): Date {
        return this._startDate;
    }

    public set startDate(value: Date) {
        this._startDate = value;
    }

    public get endDate(): Date {
        return this._endDate;
    }

    public set endDate(value: Date) {
        this._endDate = value;
    }

    public get numberOfPeople(): number {
        return this._numberOfPeople;
    }

    public set numberOfPeople(value: number) {
        this._numberOfPeople = value;
    }

    public get room(): string {
        return this._room;
    }

    public set room(value: string) {
        this._room = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get location(): string {
        return this._location;
    }

    public set location(value: string) {
        this._location = value;
    }

    public get hotelServices(): string {
        return this._hotelServices;
    }

    public set hotelServices(value: string) {
        this._hotelServices = value;
    }

    public get state(): boolean | undefined {
        return this._state;
    }

    public set state(value: boolean) {
        this._state = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get fkAdvisorEmail(): string {
        return this._fkAdvisorEmail;
    }

    public set fkAdvisorEmail(value: string) {
        this._fkAdvisorEmail = value;
    }
}

export default Hotel;