import passport from 'passport';
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import config from './config';
import UsersModel from '../components/users/users.model';

passport.use(new LocalStrategy(
    // {
    //     session: false
    // },
    async (username, password, done) => {
        try {
            const user = await UsersModel.findOne({username: username});

            if (user && user.checkPassword(password)) {
                done(null, user);
            } else {
                done(null, false);
            }
            
        } catch(err) {
            done(err, null);
        }
    }
));

passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secretKey
    },
    async (payload, done) => {
        try {
            const user = UsersModel.findById(payload.id);

            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        } catch(err) {
            done(err, null);
        }
    }
));

export default passport;