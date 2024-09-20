import express, { Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';


//ROUTES
import auth from './routes/authRoute';
import adminRoutes from './routes/user/admin/adminRoutes';
import clientRoutes from './routes/user/client/clientRoutes';
import adviserRoutes from './routes/user/adviser/adviserRoutes';
import supplierRoutes from './routes/supplier/supplierRoutes';
import packageRoutes from './routes/managementServices/package/packageRoute';
import chatRoutes from './routes/chat/chatAI';
import googleRoute from './routes/googleRoute';
import hotelRoutes from './routes/managementServices/hotel/hotelRoute';
import transportRoutes from './routes/managementServices/transport/transportRoutes';
import transactionRoutes from './routes/transaction/transationsRoute';
import morgan from 'morgan';

const app = express().use(bodyParser.json());


// Configura dotenv
dotenv.config();

app.use(cors());
app.use(morgan('dev'));

app.use('/auth-google', googleRoute);

// Define las rutas
app.use('/auth', auth);

//Client routes
app.use('/client', clientRoutes);

//Admin routes
app.use('/admin', adminRoutes);

//Adviser routes
app.use('/adviser', adviserRoutes);

//Supplier routes
app.use('/supplier', supplierRoutes);

//Hotel routes
app.use('/hotel', hotelRoutes);

//Transport routes
app.use('/transport', transportRoutes);

//Pacakge routes
app.use('/package', packageRoutes);

//AI routes
app.use('/chat', chatRoutes);

//Transaction routes
app.use('/transaction', transactionRoutes);

const PORT = process.env.PORT || 10240;

app.listen(PORT, () => {
    console.log(`Server ejecutandose en el puerto: ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});

export default app;