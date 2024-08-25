class Update {
    private _id: number;
    private _name?: string;
    private _destination?: string;
    private _startDate?: Date;
    private _endDate?: Date;
    private _numberOfPeople?: number;
    private _room?: string;
    private _description?: string;
    private _location?: string;
    private _hotelServices?: string;
    private _price?: number;
    private _state?: boolean;
    private _fkAdviserEmail?: string;

    constructor(
        _id: number,
        _name?: string, 
        _destination?: string, 
        _startDate?: Date, 
        _endDate?: Date, 
        _numberOfPeople?: number, 
        _room?: string, 
        _description?: string, 
        _location?: string, 
        _hotelServices?: string, 
        _state?: boolean,
        _price?: number, 
        _fkAdviserEmail?: string,
    ){
        this._id=_id;
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
        this._fkAdviserEmail= _fkAdviserEmail;
    }

    //GETTERS Y SETTERS
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get name(): string | undefined{
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get destination(): string | undefined {
        return this._destination;
    }

    public set destination(value: string) {
        this._destination = value;
    }

    public get startDate(): Date | undefined{
        return this._startDate;
    }

    public set startDate(value: Date) {
        this._startDate = value;
    }

    public get endDate(): Date | undefined{
        return this._endDate;
    }

    public set endDate(value: Date) {
        this._endDate = value;
    }

    public get numberOfPeople(): number | undefined{
        return this._numberOfPeople;
    }

    public set numberOfPeople(value: number) {
        this._numberOfPeople = value;
    }

    public get room(): string | undefined {
        return this._room;
    }

    public set room(value: string) {
        this._room = value;
    }

    public get description(): string | undefined{
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get location(): string | undefined {
        return this._location;
    }

    public set location(value: string) {
        this._location = value;
    }

    public get hotelServices(): string | undefined {
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

    public get price(): number | undefined {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get fkAdviserEmail(): string | undefined{
        return this._fkAdviserEmail;
    }

    public set fkAdviserEmail(value: string) {
        this._fkAdviserEmail = value;
    }
}

export default Update;