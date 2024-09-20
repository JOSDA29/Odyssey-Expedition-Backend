class Create {
    private _clientEmail: string;
    private _adviserEmail: string;
    private _billingDate: Date;
    private _service: string;
    private _paymentMethod : string;
    private _serviceType: string;
    private _description: string;
    private _state: string;
    constructor(
        _clientEmail: string, 
        _adviserEmail: string,
        _billingDate: Date,
        _service: string,
        _paymentMethod : string,
        _serviceType: string,
        _description: string,
        _state: string
    ){
        this._clientEmail = _clientEmail;
        this._adviserEmail = _adviserEmail;
        this._billingDate = _billingDate;
        this._service = _service;
        this._paymentMethod = _paymentMethod;
        this._serviceType = _serviceType;
        this._description = _description;
        this._state = _state
    }
    public get clientEmail(): string {
        return this._clientEmail;
    }
    public get adviserEmail(): string {
        return this._adviserEmail;
    }
    public get billingDate(): Date {
        return this._billingDate;
    }
    public get service(): string {
        return this._service;
    }
    public get paymentMethod(): string {
        return this._paymentMethod;
    }
    public get serviceType(): string {
        return this._serviceType;
    }
    public get description(): string {
        return this._description;
    }
    public get state(): string {
        return this._state;
    }
    public set clientEmail(value: string) {
        this._clientEmail = value;
    }
    public set adviserEmail(value: string) {
        this._adviserEmail = value;
    }
    public set billingDate(value: Date) {
        this._billingDate = value;
    }
    public set service(values: string) {
        this._service = values;
    }
    public set paymentMethod(value: string) {
        this._paymentMethod = value;
    }
    public set serviceType(value: string){ 
        this._serviceType = value;
    }
    public set description(value: string) {
        this._description = value;
    }
    public set state(value: string) {
        this._state = value;
    }
}

export default Create;