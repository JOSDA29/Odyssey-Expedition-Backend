import resetPassword from "../../repository/user/client/resetPassword";

class ResetPassword{
    static async resetPasswordd(email: string) {
        const userExists = await resetPassword.findByEmail(email);

        if(!userExists){
            throw new Error("User not found");     
        }

        const mailOption = {
            from : process.env.MAIL_USER,
            to: email,
            subject: 'Password Reset Request'
        };        
    }
}

export default { ResetPassword };