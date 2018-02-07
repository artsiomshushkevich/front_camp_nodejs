import mongo from '../../utils/mongo';
import bcrypt from 'bcrypt';
import config from '../../config/config';
import passport from '../../config/passport';

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

usersSchema.methods.checkPassword = async function(password) {
    if (!password) {
        return false;
    }

    const newPasswordHash = await bcrypt.hash(password, config.saltRounds);

    return (newPasswordHash === this.passwordHash) ? true : false;
};

export default mongo.instance.model('User', usersSchema);