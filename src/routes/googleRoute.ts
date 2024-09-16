import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { isLoggedIn } from '../middlewares/passportMiddleware';
import googleProtected from '../controllers/google/googleProtectedController';

const router = express.Router();

// Ruta para iniciar autenticación con Google
router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

// Callback de Google
router.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect: '/auth/protected',
    failureRedirect: '/auth/google/failure'
  })
);

// Ruta protegida para usuarios autenticados
router.get('/protected', isLoggedIn, googleProtected);

// Cerrar sesión
router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy(() => {
      res.send('Goodbye!');
    });
  });
});

// Manejo de fallos de autenticación
router.get('/google/failure', (req: Request, res: Response) => {
  res.send('Failed to authenticate.');
});

export default router;
