class UpdateImage{
    private _transportID: string;
    private _fkAdviserEmail: string;
    private _imageUrl: string;

    constructor(
        _transportID: string,
        _fkAdviserEmail: string,
        _imageUrl: string,
    ){
        this._transportID = _transportID;
        this._fkAdviserEmail = _fkAdviserEmail;
        this._imageUrl = _imageUrl;
    }

    //Getters y Setters

    public get transportID(): string{
        return this._transportID;
    }

    public set transportID(value: string){
        this._transportID = value;
    }

    public get fkAdviserEmail(): string{
        return this._fkAdviserEmail;
    }

    public set fkAdviserEmail(value: string){
        this._fkAdviserEmail = value;
    }

    public get imageUrl(): string{
        return this._imageUrl;
    }

    public set imageUrl(value: string){
        this._imageUrl = value;
    }
}

export default UpdateImage;