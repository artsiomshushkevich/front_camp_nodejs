import passport from 'passport';
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import config from './config';
import UsersModel from '../components/users/users.model';
import bcrypt from 'bcrypt';

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await UsersModel.findOne({username: username});

            if (user) {
                const comparisonResult = await bcrypt.compare(password, user.passwordHash);
                
                if (comparisonResult) {
                    done(null, user);
                } else {
                    done(null, false);
                }
               
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