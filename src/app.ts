import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

//ROUTES
import auth from './routes/authRoute';
import adminRoutes from './routes/user/admin/adminRoutes';
import clientRoutes from './routes/user/client/clientRoutes';
import adviserRoutes from './routes/user/adviser/adviserRoutes';
import supplierRoutes from './routes/supplier/supplierRoutes';
import chatRoutes from './routes/chat/chatAI';

import hotelRoutes from './routes/managementServices/hotel/hotelRoute';
import transportRoutes from './routes/managementServices/transport/transportRoutes'

import morgan from 'morgan';

const app = express().use(bodyParser.json());

app.use(cors());
dotenv.config();
app.use(morgan('dev'));

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

//AI routes
app.use('/chat', chatRoutes);

const PORT = process.env.PORT || 10240;

app.listen(PORT, () => {
    console.log(`Server ejecutandose en el puerto: ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});

export default app;
