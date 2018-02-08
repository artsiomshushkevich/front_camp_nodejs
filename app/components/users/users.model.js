import mongo from '../../utils/mongo';
// import bcrypt from 'bcrypt';
// import config from '../../config/config';
// import passport from '../../config/passport';

const usersSchema = new mongo.instance.Schema(
    { 
        username: {
           type: String,
           unique: true
        }, 
        passwordHash: String 
    },
    {
        versionKey: false
    }
);

export default mongo.instance.model('User', usersSchema);