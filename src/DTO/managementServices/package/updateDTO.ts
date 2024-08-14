class Update {
    _id: number;
    _origin?: string;
    _destination?: string;
    _departureDate?: Date;
    _returnDate?: Date;
    _numberOfPeople?: number;
    _itinerary?: string;
    _packageServices?: string;
    _customerPreferences?: string;
    _state?: string;
    _fkHotelID?: number;
    _fkTransportID?: string;
    _status?: string;
    _totalPrice?: number;
    _fkAdviserEmail?: string;

    constructor(
        _id: number,
        _origin?: string,
        _destination?: string,
        _departureDate?: Date,
        _returnDate?: Date,
        _numberOfPeople?: number,
        _itinerary?: string,
        _packageServices?: string,
        _customerPreferences?: string,
        _state?: string,
        _fkHotelID?: number,
        _fkTransportID?: string,
        _status?: string,
        _totalPrice?: number,
        _fkAdviserEmail?: string,
    ) {
        this._id = _id;
        this._origin = _origin;
        this._destination = _destination;
        this._departureDate = _departureDate;
        this._returnDate = _returnDate;
        this._numberOfPeople = _numberOfPeople;
        this._itinerary = _itinerary;
        this._packageServices = _packageServices;
        this._customerPreferences = _customerPreferences;
        this._state = _state;
        this._fkHotelID = _fkHotelID;
        this._fkTransportID = _fkTransportID;
        this._status = _status;
        this._totalPrice = _totalPrice;
        this._fkAdviserEmail = _fkAdviserEmail;
    }
}

export default Update;