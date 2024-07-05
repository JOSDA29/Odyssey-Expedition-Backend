class UserDto {

  private Id_Client: string;
  private email_C: string;
  private password_C: string;
  private name_C: string;
  private lastName_C: string;
  private phoneNumber_C: string;
  private image_C: string;

  constructor(
    Id_Client: string,
    email_C: string,
    password_C: string,
    name_C: string,
    lastName_C: string,
    phoneNumber_C: string,
    image_C: string
  ) {
    this.Id_Client = Id_Client
    this.email_C = email_C
    this.password_C = password_C
    this.name_C = name_C
    this.lastName_C = lastName_C
    this.phoneNumber_C = phoneNumber_C
    this.image_C = image_C
  }

  public get IdClient(): string
  {
         return this.Id_Client;
     }
 
     public set IdClient(IdClient: string
 ) {
         this.Id_Client = IdClient;
     }
 
     public get emailC(): string
  {
         return this.email_C;
     }
 
     public set emailC(emailC: string
 ) {
         this.email_C = emailC;
     }
 
     public get passwordC(): string
  {
         return this.password_C;
     }
 
     public set passwordC(passwordC: string
 ) {
         this.password_C = passwordC;
     }
 
     public get nameC(): string
  {
         return this.name_C;
     }
 
     public set nameC(nameC: string
 ) {
         this.name_C = nameC;
     }
 
     public get lastNameC(): string
  {
         return this.lastName_C;
     }
 
     public set lastNameC(lastNameC: string
 ) {
         this.lastName_C = lastNameC;
     }
 
     public get phoneNumberC(): string
  {
         return this.phoneNumber_C;
     }
 
     public set phoneNumberC(phoneNumberC: string
 ) {
         this.phoneNumber_C = phoneNumberC;
     }
 
     public get imageC(): string {
         return this.image_C;
     }
 
     public set imageC(imageC: string) {
         this.image_C = imageC;
     }
  

  



}
export default UserDto;