import express from 'express';
import UserRoutes from './routes/UserRoutes';
import { AppDataSource } from './config/data-source';
import cors from 'cors';
import GeminiRoutes from '../src/routes/GeminiRoute';
import RecipeRoutes from '../src/routes/RecipeRoute';
import passport, { Profile } from 'passport';
import './passport';
import session from 'express-session';

import { Request, Response } from 'express';

declare module 'express' {
  interface Request {
    id?: string;
  }
}

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true,
  })
);
app.use(
  session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session()); // ← this enables req.user

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/login',
  })
);

app.get('/protected', (req: Request, res: Response) => {
  if (!req.user) res.status(401).send('Not authorized');

  // Type-safe access if using TypeScript
  const user = req.user as Profile;

  res.send(user);
});

app.use('/api/v1/user', UserRoutes);
app.use('/api/v1', GeminiRoutes);
app.use('/api/v1', RecipeRoutes);

AppDataSource.initialize()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error', err));

app.listen(process.env.APP_URL, () =>
  console.log(`Listening to port ${process.env.APP_URL}`)
);
