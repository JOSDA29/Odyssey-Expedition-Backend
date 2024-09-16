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
import session from 'express-session';
import morgan from 'morgan';
import passport from 'passport';

const app = express().use(bodyParser.json());



// Configura dotenv
dotenv.config();

app.use(cors());
app.use(morgan('dev'));


app.use(session({ secret: 'oddy', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Este es el formulario que se tiene que hacer en el front para consumir el back de la api de google
app.get('/', (req: Request, res: Response) => {
    res.send(`
      <html>
        <body>
          <h1>Bienvenido</h1>
          <form action="/auth/google" method="get">
            <button type="submit">Autentícate con Google</button>
          </form>
        </body>
      </html>
    `);
  });

app.use('/auth', googleRoute);

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

const PORT = process.env.PORT || 10240;

app.listen(PORT, () => {
    console.log(`Server ejecutandose en el puerto: ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});

export default app;
