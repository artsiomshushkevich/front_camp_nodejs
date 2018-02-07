import mongoose from 'mongoose';
import customLogger from './custom-logger';
import config from '../config/config';

class Mongo {
    constructor(mongo) {
        this.instance = mongo;
        this.instance.Promise = global.Promise;
        this.db = this.instance.connection;

        this.instance.connect(config.mongoUrl)
            .then(
                () => customLogger.info(`Mongoose connected!`),
                (error) => customLogger.error(`mongoose connection has failed! Error ${error}`) 
            );
    }

}

export default new Mongo(mongoose);
