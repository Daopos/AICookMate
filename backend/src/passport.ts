import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Profile } from 'passport-google-oauth20';
import { DoneCallback } from 'passport';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      //   let user = await User.findOne({ where: { googleId: profile.id } });
      //   if (!user) {
      //     user = await User.create({
      //       name: profile.displayName,
      //       email: profile.emails[0].value,
      //       googleId: profile.id,
      //       provider: 'google',
      //     });
      //   }

      done(null, profile);
    }
  )
);

passport.serializeUser((user: Express.User, done: DoneCallback) => {
  done(null, user);
});

passport.deserializeUser((obj: Profile, done: DoneCallback) => {
  done(null, obj);
});
