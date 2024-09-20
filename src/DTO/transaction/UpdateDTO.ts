class Update {
    private _transactionID: number;
    private _price: number
    private _state: string;
    private _service: string;
    constructor (
        _transactionID: number, _price: number, _state: string, _service: string
    ) {
        this._transactionID = _transactionID;
        this._price = _price;
        this._state = _state;
        this._service = _service;
    }
    public get transactionID(): number {
        return this._transactionID
    }
    public set transactionID(value: number){
        this._transactionID = value;
    }
    public get price(): number {
        return this._price
    }
    public set price(value: number){
        this._price = value;
    }
    public get state(): string {
        return this._state
    }
    public set state(value: string){
        this._state = value;
    }
    public get service(): string {
        return this._service
    }
    public set service(value: string){
        this._service = value;
    }
}

export default Update;