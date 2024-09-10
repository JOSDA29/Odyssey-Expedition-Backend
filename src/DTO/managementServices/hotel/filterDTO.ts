class filter {
    _Id?: number;
    _name?: string;
    _location?: string;
    _state?: boolean;
    constructor(
        _Id?: number,
        _name?: string,
        _location?: string,
        _state?: boolean,
    ){
        this._Id =_Id;
        this._name = _name;
        this._location = _location;
        this._state = _state;
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
    public get location(): string | undefined{
        return this._location;
    }
    public set location(value: string){
        this._location = value;
    }
    get state(): boolean | undefined {
        return this._state;
    }

    set state(value: boolean | undefined) {
        this._state = value;
    }
}

export default filter;