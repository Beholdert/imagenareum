import passport from 'passport';
import GoogleTokenStrategy from 'passport-google-plus-token';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User';

passport.use(
  'googleToken',
  new GoogleTokenStrategy(
    {
      clientID:
        '',
      clientSecret: '',
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile.id);
        const user = await User.findOne({
          googleID: profile.id
        });

        if (user) {
          console.log('user found', user);
          return done(null, user);
        }

        const newUser = new User({
          googleID: profile.id,
          name: profile.name.givenName
        });

        await newUser.save();

        console.log('new user', newUser);
        done(null, newUser);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  'jwt',
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'saskanariy'
    },
    async (payload, done) => {
      console.log(payload);

      try {
        const user = await User.findById(payload.id);

        if (user) {
          return done(null, user);
        }

        done(new Error('user not found'), false);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

module.exports = passport;
