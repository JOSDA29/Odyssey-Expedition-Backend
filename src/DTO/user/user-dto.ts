class UserDto {
  private Id_Client;
  private email_C;
  private password_C;
  private name_C;
  private lastName_C;
  private phoneNumber_C;
  private image_C;

  constructor(
    Id_Client: string,
    email: string,
    password: string,
    name: string,
    lastName: string,
    phoneNumber: string,
    image: string
  ) {
    this.Id_Client = Id_Client;
    this.email_C = email;
    this.password_C = password;
    this.name_C = name;
    this.lastName_C = lastName;
    this.phoneNumber_C = phoneNumber;
    this.image_C = image;
  }
  //getters
  public get id_Client(): string {
    return this.Id_Client;
  }
  public get email() {
    return this.email_C;
  }
  public get password() {
    return this.password_C;
  }
  public get name() {
    return this.name_C;
  }
  public get lastName() {
    return this.lastName_C;
  }
  public get phoneNumber() {
    return this.phoneNumber_C;
  }
  public get image() {
    return this.image_C;
  }
  //setters
  public set id_Client(Id_Client: string) {
    this.Id_Client = Id_Client;
  }
  public set email(email: string) {
    this.email_C = email;
  }
  public set password(password: string) {
    this.password_C = password;
  }
  public set name(name: string) {
    this.name_C = name;
  }
  public set lastName(lastName: string) {
    this.lastName_C = lastName;
  }
  public set phoneNumber(phoneNumber: string) {
    this.phoneNumber_C = phoneNumber;
  }
  public set image(image: string) {
    this.image_C = image;
  }
}
export default UserDto;