class UpdateImage{
    private _hotelID: number;
    private _fkAdviserEmail: string;
    private _imageUrl: string;

    constructor(
        _hotelID: number,
        _fkAdviserEmail: string,
        _imageUrl: string,
    ){
        this._hotelID = _hotelID;
        this._fkAdviserEmail = _fkAdviserEmail;
        this._imageUrl = _imageUrl;
    }

    //Getters y Setters

    public get hotelId(): number{
        return this._hotelID;
    }

    public set hotelId(value: number){
        this._hotelID = value;
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