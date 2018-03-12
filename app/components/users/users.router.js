import express from 'express';
import UsersModel from './users.model';
import passport from '../../config/passport';
import jwt from 'jsonwebtoken';
import config from '../../config/config';
import bcrypt from 'bcrypt';

const usersRouter = express.Router();

const getJWTFromUser = (user) => {
    const payload = {
        id: user.id,
        username: user.username
    };

    return jwt.sign(payload, config.secretKey);
};

usersRouter.post('/auth', async (req, res, next) => {
    try {
        const existingUser = await UsersModel.findOne({username: req.body.username});

        if (existingUser) {
            return res.send({
                username: existingUser.username,
                authToken: 'Bearer ' + getJWTFromUser(existingUser)
            });
        }
          
        const passwordHash = await bcrypt.hash(req.body.password, config.saltRounds);
        const newUser = new UsersModel({
            username: req.body.username,
            passwordHash: passwordHash
        });

        const savingResult = await newUser.save();

        res.send({
            username: savingResult.username,
            authToken: 'Bearer ' + getJWTFromUser(savingResult)
        });
    } catch(err) {
        next(err);
    }
});

// usersRouter.post('/login', passport.authenticate('local', {session: false}), (req, res, next) => {
//     const user = req.user;

//     res.send({
//         username: user.username,
//         authToken: 'Bearer ' + getJWTFromUser(user)
//     });

// });

export default usersRouter;