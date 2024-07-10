class ChangePassword {
   private _id: string;
   private _oldPassword: string;
   private _newPassword: string;

   constructor(
    id: string,
    oldPassword: string,
    newPassword: string,
   ) {
    this._id = id;
    this._oldPassword = oldPassword;
    this._newPassword = newPassword;7
   }

   get id(): string {
    return this._id;
   }
   set id(value: string){
    this._id = value;
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