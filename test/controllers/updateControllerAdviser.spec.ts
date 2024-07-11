// import { Request, Response } from "express";
// import { mock, MockProxy} from 'jest-mock-extended';
// import update from "../../src/controllers/updateController";
// import updateService from "../../src/services/UpdateService";
// import User from "../../src/DTO/userDTO";

// jest.mock('../../src/services/UpdateService');

// describe('update controller', () => {
//     let req: MockProxy<Request>; 
//     let res: MockProxy<Response>;

//     beforeEach(() => {
//         req: mock<Request>();
//         res: mock<Response>();
//     });

//     it('should respond with 200 status if update is successfully', async () => {
//         req.body = {
//             id: '16227714',
//             names: 'John',
//             lastnames: 'Tapasco',
//             email: 'john.Tapase@example.com',
//             phone: '3212662497',
//             image: '1234567890',
//             fkAdministratorId: '1095550984',
//             role: 'Adviser'
//           };

//           const user = new User('16227714', 'John', 'Tapasco', 'john.Tapase@example.com', '3212662497', '1234567890', 'fkAdministratorId')
//     });
// })