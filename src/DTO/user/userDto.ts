class UserDto {
  private Id_Client: string;
  private name_C: string;
  private lastName_C: string;
  private email_C: string;
  private password_C: string;
  private phoneNumber_C: string;
  private image_C: string;
  private _id_Admin?: number;

  constructor(
    Id_Client: string,
    name_C: string,
    lastName_C: string,
    email_C: string,
    password_C: string,
    phoneNumber_C: string,
    image_C: string,
    id_Admin?: number
  ) {
    this.Id_Client = Id_Client;
    this.name_C = name_C;
    this.lastName_C = lastName_C;
    this.email_C = email_C;
    this.password_C = password_C;
    this.phoneNumber_C = phoneNumber_C;
    this.image_C = image_C;
    this._id_Admin = id_Admin;
  }

  public get idC(): string {
    return this.Id_Client;
}

  public  set idC(value: string) {
    this.Id_Client = value;
}

  public get emailC(): string {
    return this.email_C;
  }

  public set emailC(emailC: string) {
    this.email_C = emailC;
  }

  public get passwordC(): string {
    return this.password_C;
  }

  public set passwordC(passwordC: string) {
    this.password_C = passwordC;
  }

  public get nameC(): string {
    return this.name_C;
  } 

  public set nameC(nameC: string) {
    this.name_C = nameC;
  }

  public get lastNameC(): string {
    return this.lastName_C;
  }

  public set lastNameC(lastNameC: string) {
    this.lastName_C = lastNameC;
  }

  public get phoneNumberC(): string {
    return this.phoneNumber_C;
  }

  public set phoneNumberC(phoneNumberC: string) {
    this.phoneNumber_C = phoneNumberC;
  }

  public get imageC(): string {
    return this.image_C;
  }

  public set imageC(imageC: string) {
    this.image_C = imageC;
  }

  public get id_Admin(): any{
    return this._id_Admin;
  }
  public set id_Admin(id_Admin: number) {
    this._id_Admin = id_Admin;
  }
}
export default UserDto;
