import supertest from 'supertest';
import app from '../src/app';
import AuthService from '../src/services/AuthService';

jest.mock('../src/services/AuthService');

describe('Auth Controller', () => {
    const request = supertest(app);

    const validUser = {
        email: 'test@gmail.com',
        password: 'Test123.'
    };

    const invalidUser = {
        email: 'invalid-email',
        password: 'short'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return status 500 with error info if AuthService.auth throws an error', async () => {
        (AuthService.auth as jest.Mock).mockRejectedValue(new Error('Mock error'));

        const response = await request.post('/auth')
            .send(validUser);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Internal Server Error', errorInfo: 'Mock error' });
    });

    it('should return status 200 with access token if authentication is successful', async () => {
        const mockToken = 'mockToken';
        (AuthService.auth as jest.Mock).mockResolvedValue(mockToken);

        const response = await request.post('/auth')
            .send(validUser);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: 'Successful authentication',
            AccessToken: mockToken
        });
    });

    it('should return status 401 if authentication fails', async () => {
        (AuthService.auth as jest.Mock).mockResolvedValue(null);

        const response = await request.post('/auth')
            .send(validUser);

        expect(response.status).toBe(401);
        expect(response.body).toEqual({
            status: 'Invalid email or password'
        });
    });

    it('should return 422 with validation errors if email is invalid', async () => {
        const response = await request.post('/auth')
            .send(invalidUser);

        expect(response.status).toBe(422);
        expect(response.body.errors).toHaveLength(1);
        expect(response.body.errors[0].msg).toBe('It must be a valid email.');
    });
});
