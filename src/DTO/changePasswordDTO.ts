class ChangePassword {
   private _email: string;
   private _oldPassword: string;
   private _newPassword: string;

   constructor(
    email: string,
    oldPassword: string,
    newPassword: string,
   ) {
    this._email = email;
    this._oldPassword = oldPassword;
    this._newPassword = newPassword;
   }

   get email(): string {
    return this._email;
   }
   set email(value: string){
    this._email = value;
   }

   get oldPassword(): string {
    return this._oldPassword;
   }
   set oldPassword(value: string){
    this._oldPassword = value;
   }

   get newPassword(): string{
    return this._newPassword;
   }
   set newPassword(value: string){
    this._newPassword = value;
   }
}

export default ChangePassword;