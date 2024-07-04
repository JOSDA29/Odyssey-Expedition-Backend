class Auth {
    private email: string;
    private password: string;

    constructor(
        email: string, password: string
    ) {
        this.email = email;
        this.password = password;
    }

    // Getter for email
    public get $email(): string {
        return this.email;
    }

    // Getter for password
    public get $password(): string {
        return this.password;
    }

    // Setter for email
    public set $email(value: string) {
        this.email = value;
    }

    // Setter for password
    public set $password(value: string) {
        this.password = value;
    }
}

export default Auth;
