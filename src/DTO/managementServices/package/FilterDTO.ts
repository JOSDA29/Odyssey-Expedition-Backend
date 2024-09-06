class Filter {
    private _id?: number;
    private _origin?: string;
    private _destination?: string;
    private _state?: boolean;
    private _departureDate?: Date;
    private _returnDate?: Date;
   
    constructor(
        _id?: number,
        _origin?: string,
        _destination?: string,
        _state?: boolean,
        _departureDate?: Date,
        _returnDate?: Date,
       
    ) {
        this._id = _id;
        this._origin = _origin;
        this._destination = _destination;
        this._state = _state;
        this._departureDate = _departureDate;
        this._returnDate = _returnDate; 
    }

    // Getters
    public get id(): number | undefined {
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

    public get state(): boolean | undefined {
        return this._state;
    }


    // Setters
    public set id(value: number | undefined) {
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

    public set state(value: boolean | undefined) {
        this._state = value;
    }

}

export default Filter;
