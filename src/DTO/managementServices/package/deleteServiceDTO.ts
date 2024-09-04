class DeleteService {
    private _idPackage: number;
    private _idHotel?: number;
    private _idTransport?: string;
    constructor(
        _idPackage: number,
        _idHotel?: number,
        _idTransport?: string,
    ){
        this._idPackage = _idPackage;
        this._idHotel = _idHotel;
        this._idTransport = _idTransport;
    }

    //Getters
    public get idPackage(): number {
        return this._idPackage;
    }
    public get idHotel(): number | undefined {
        return this._idHotel;
    }
    public get idTransport(): string | undefined {
        return this._idTransport;
    }

    //Setters
    public set idPackage (value: number) {
        this._idPackage = value;
    }
    public set idHotel (value: number) {
        this._idHotel = value;
    }
    public set idTransport (value: string) {
        this._idTransport = value;
    }
}

export default DeleteService;