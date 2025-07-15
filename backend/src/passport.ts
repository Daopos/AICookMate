import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { DoneCallback } from 'passport';
import { UserService } from './services/UserService';
import { UserRepo } from './repositories/UserRepo';

const userService = new UserService(new UserRepo());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const data = {
          provider_id: profile.id,
          provider: 'google',
          name: profile.displayName,
        };

        const user = await userService.createUserByGoogle(data, profile.id);

        // Pass the user object, not the profile
        done(null, user || false);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// Deserialize user - retrieve user from database using ID
passport.deserializeUser(async (id: string, done: DoneCallback) => {
  try {
    // You'll need to implement getUserById in your UserService
    const user = await userService.getUserByProviderId(id);
    done(null, user || false);
  } catch (error) {
    done(error, false);
  }
});

export default passport;
