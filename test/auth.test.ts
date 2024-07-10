import { Request, Response } from 'express';
import auth from '../src/controllers/authController';
import AuthService from '../src/services/AuthService';
import app from '../src/app'
import supertest from 'supertest';

jest.mock('../src/helpers/generateToken');
jest.mock('../src/services/AuthService');
jest.mock('bcryptjs', () => ({
  genSalt: jest.fn().mockResolvedValue('mockSalt'),
  hash: jest.fn().mockResolvedValue('hashedPassword')
}));

describe('register', () => {
  
    const request = supertest(app);

    const req = {
      body: {
        email: 'test@gmail.com',
        password: 'Test123.'
      }
    } as Request;
  
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn()
    } as unknown as Response;


    const invalidUser = {
        email: 'invalid-email',
        password: 'short'
    };


  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should return status 500 with error info if AuthService.auth throws an error', async () => {
        (AuthService.auth as jest.Mock).mockRejectedValue(new Error('Mock error'));

        await auth(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({ error: 'Internal Server Error', errorInfo: 'Mock error' });
    });

    it('should return status 200 with access token if authentication is successful', async () => {
        const mockToken = 'mockToken';
        (AuthService.auth as jest.Mock).mockResolvedValue(mockToken);

        await auth(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            status: 'Successful authentication',
            AccessToken: mockToken
        });
    });

    it('should return status 401 if authentication fails', async () => {
        (AuthService.auth as jest.Mock).mockResolvedValue(null);

        await auth(req, res);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({
            status: 'Invalid email or password'
        });
    });


    it('should return 422 with validation errors if email is invalid', async () => {
        const response = await request.post('/auth')
            .send({
                email: invalidUser.email,
                password: invalidUser.password
            });

        expect(response.status).toBe(422);
        expect(response.body.errors).toHaveLength(1);
        expect(response.body.errors[0].msg).toBe('It must be a valid email.');
    });
});
