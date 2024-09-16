import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();

export const strategyOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: "http://localhost:10240/auth/google/callback",
};

// Usa la estrategia de Google en Passport
passport.use(new GoogleStrategy(strategyOptions, async (accessToken: string, refreshToken: string, profile: any, done: any) => {
  done(null, profile);
}));

// Serializa el usuario completo (o una parte relevante) en la sesión
// Serializa el usuario completo (o una parte relevante) en la sesión
passport.serializeUser((user: any, done) => {
  done(null, {
    email: user.emails[0].value,
    firstName: user.name.givenName,
    lastName: user.name.familyName
  });
});

// Deserializa el usuario usando la información de la sesión
passport.deserializeUser((userData: any, done) => {
  done(null, {
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName
  });
});

