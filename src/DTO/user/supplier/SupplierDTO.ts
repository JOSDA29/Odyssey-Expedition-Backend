class SupplierDTO {
    private _supplierID: string;
    private _companyName: string;
    private _email: string;
    private _schedule: string | null;
    private _address: string | null;
    private _phone: string;
    private _state: boolean | null;
    private _fkAdvisorEmail: string;
  
    constructor(
      supplierID: string,
      companyName: string,
      email: string,
      phone: string,
      fkAdvisorEmail: string,
      schedule: string | null = null,
      address: string | null = null,
      state: boolean | null = null,
    ) {
      this._supplierID = supplierID;
      this._companyName = companyName;
      this._email = email;
      this._phone = phone;
      this._fkAdvisorEmail = fkAdvisorEmail;
      this._schedule = schedule;
      this._address = address;
      this._state = state;
   }
  
    // Getters and setters
  
    public get supplierID(): string {
      return this._supplierID;
    }
  
    public set supplierID(value: string) {
      this._supplierID = value;
    }
  
    public get companyName(): string {
      return this._companyName;
    }
  
    public set companyName(value: string) {
      this._companyName = value;
    }
  
    public get email(): string {
      return this._email;
    }
  
    public set email(value: string) {
      this._email = value;
    }
  
    public get schedule(): string | null {
      return this._schedule;
    }
  
    public set schedule(value: string | null) {
      this._schedule = value;
    }
  
    public get address(): string | null {
      return this._address;
    }
  
    public set address(value: string | null) {
      this._address = value;
    }
  
    public get phone(): string {
      return this._phone;
    }
  
    public set phone(value: string) {
      this._phone = value;
    }
  
    public get state(): boolean | null {
      return this._state;
    }
  
    public set state(value: boolean | null) {
      this._state = value;
    }
  
    public get fkAdvisorEmail(): string {
      return this._fkAdvisorEmail;
    }
  
    public set fkAdvisorEmail(value: string) {
      this._fkAdvisorEmail = value;
    }
  }
  
  export default SupplierDTO;
  