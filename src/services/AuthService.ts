import generateToken from '../helpers/generateToken';
import AuthRepository from '../repository/authRepository';
import Auth from '../DTO/authDTO';
import compareHash from '../helpers/compareHash';

class AuthService {
    static async auth(auth: Auth) {
        try {
            const clientResult = await AuthRepository.authClient(auth.$email);
            const adminResult = await AuthRepository.authAdmin(auth.$email);
            const adviserResult = await AuthRepository.authAdviser(auth.$email);

            const roles = [
                { result: clientResult, role: 'Client' },
                { result: adminResult, role: 'Administrator' },
                { result: adviserResult, role: 'Adviser' },
            ];

            for (const { result, role } of roles) {
                if (result.length > 0) {
                    const isPasswordValid = await compareHash(
                        auth.$password,
                        result[0].password,
                    );
                    if (isPasswordValid) {
                        const token = generateToken(
                            { email: auth.$email, role: role },
                            process.env.SECRET,
                            60,
                        );
                        return token;
                    }
                }
            }
            return null;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(
                    'An error occurred, error information: ' + error.message,
                );
            }
        }
    }
}

export default AuthService;
