export class FilterTransportDTO {
  private _transportId?: string;
  private _transportType?: string;
  private _origin?: string;
  private _destination?: string;
  private _arrivalDate?: Date;
  private _departureDate?: Date;
  private _state?: boolean;

  constructor(
    transportId?: string,
    transportType?: string,
    origin?: string,
    destination?: string,
    arrivalDate?: Date,
    departureDate?: Date,
    state?: boolean
  ) {
    this._transportId = transportId;
    this._transportType = transportType;
    this._origin = origin;
    this._destination = destination;
    this._arrivalDate = arrivalDate;
    this._departureDate = departureDate;
    this._state = state;
  }

  // Getters
  public get transportId(): string | undefined {
    return this._transportId;
  }

  public get transportType(): string | undefined {
    return this._transportType;
  }

  public get origin(): string | undefined {
    return this._origin;
  }

  public get destination(): string | undefined {
    return this._destination;
  }

  public get arrivalDate(): Date | undefined {
    return this._arrivalDate;
  }

  public get departureDate(): Date | undefined {
    return this._departureDate;
  }

  public get state(): boolean | undefined {
    return this._state;
  }

  // Setters
  public set transportId(value: string | undefined) {
    this._transportId = value;
  }

  public set transportType(value: string | undefined) {
    this._transportType = value;
  }

  public set origin(value: string | undefined) {
    this._origin = value;
  }

  public set destination(value: string | undefined) {
    this._destination = value;
  }

  public set arrivalDate(value: Date | undefined) {
    this._arrivalDate = value;
  }

  public set departureDate(value: Date | undefined) {
    this._departureDate = value;
  }

  public set state(value: boolean | undefined) {
    this._state = value;
  }
}

export default FilterTransportDTO;
