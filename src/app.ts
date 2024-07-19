import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


//ROUTES
import auth from './routes/authRoute';
import register from './routes/user/client/registerRoute';
import registerAdviser from './routes/user/admin/registerAdviser';
import updateClient from './routes/user/client/update';
import updateAdmin from './routes/user/admin/update';
import updateAdviser from './routes/user/adviser/update';
import changePasswordAdmin from './routes/user/admin/changePassword';
import changePasswordClient from './routes/user/client/changePassword';
import changePasswordAdviser from './routes/user/adviser/changePassword';
import getByEmailClient from './routes/user/client/getByEmail';
import getAllClient from './routes/user/client/getAll';
import getByEmailAviser from './routes/user/adviser/getByEmail';
import getAllAdviser from './routes/user/adviser/getAll';
import getByEmailAdmin from './routes/user/admin/getByEmail';

dotenv.config();

const app = express().use(bodyParser.json());

// Define las rutas
app.use('/auth', auth);
app.use('/register', register);

//Client routes
app.use('/client/update', updateClient);
app.use('/client/changePassword', changePasswordClient );
app.use('/client/getByEmail', getByEmailClient);
app.use('/client/getAll', getAllClient);

//Admin routes
app.use('/admin/update', updateAdmin);
app.use('/admin/changePassword', changePasswordAdmin);
app.use('/admin/register-advisor', registerAdviser);
app.use('/admin/getByEmail', getByEmailAdmin);

//Adviser routes
app.use('/adviser/changePassword', changePasswordAdviser);
app.use('/adviser/update', updateAdviser);
app.use('/adviser/getByEmail', getByEmailAviser);
app.use('/adviser/getAll', getAllAdviser);

const PORT = process.env.PORT || 10240;

app.listen(PORT, () => {
    console.log(`Server ejecutandose en el puerto: ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});

export default app;
