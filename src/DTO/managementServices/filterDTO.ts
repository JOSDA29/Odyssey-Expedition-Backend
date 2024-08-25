class filter {
    _Id?: number;
    _name?: string;
    _destination?: string;
    _startDate?: Date;
    _endDate?: Date;
    _numberOfPeople?: number;
    _room?: string;
    _description?: string;
    _location?: string;
    _services?: string;
    _state?: boolean;
    _priceMin?: number;
    _priceMax?: number;
    constructor(
        _Id?: number,
        _name?: string,
        _destination?: string,
        _startDate?: Date,
        _endDate?: Date,
        _numberOfPeople?: number,
        _room?: string,
        _description?: string,
        _location?: string,
        _services?: string,
        _state?: boolean,
        _priceMin?: number,
        _priceMax?: number,
    ){
        this._Id =_Id;
        this._name = _name;
        this._destination = _destination;
        this._startDate = _startDate;
        this._endDate = _endDate;
        this._numberOfPeople = _numberOfPeople;
        this._room = _room;
        this._description = _description;
        this._location = _location;
        this._services = _services;
        this._state = _state;
        this._priceMin = _priceMin;
        this._priceMax = _priceMax;
    }

    //Getters y Setters

    public get id(): number | undefined{
        return this._Id;
    }
    public set id(value: number){
        this._Id = value;
    }
    public get name(): string | undefined{
        return this._name;
    }
    public set name(value: string){
        this._name = value;
    }
    public get destination(): string | undefined{
        return this._destination;
    }
    public set destination(value: string){
        this._destination = value;
    }
    public get startDate(): Date | undefined{
        return this._startDate;
    }
    public set startDate(value: Date){
        this._startDate = value;
    }
    public get endDate(): Date | undefined{
        return this._endDate;
    }
    public set endDate(value: Date){
        this._endDate = value;
    }
    public get numberOfPeople(): number | undefined{
        return this._numberOfPeople;
    }
    public set numberOfPeople(value: number){
        this._numberOfPeople = value;
    }
    get room(): string | undefined {
        return this._room;
    }

    set room(value: string | undefined) {
        this._room = value;
    }
    get description(): string | undefined {
        return this._description;
    }

    set description(value: string | undefined) {
        this._description = value;
    }
    get location(): string | undefined {
        return this._location;
    }

    set location(value: string | undefined) {
        this._location = value;
    }
    get services(): string | undefined {
        return this._services;
    }

    set services(value: string | undefined) {
        this._services = value;
    }
    get state(): boolean | undefined {
        return this._state;
    }

    set state(value: boolean | undefined) {
        this._state = value;
    }

    get priceMin(): number | undefined {
        return this._priceMin;
    }

    set priceMin(value: number | undefined) {
        this._priceMin = value;
    }

    get priceMax(): number | undefined {
        return this._priceMax;
    }

    set priceMax(value: number | undefined) {
        this._priceMax = value;
    }
}

export default filter;