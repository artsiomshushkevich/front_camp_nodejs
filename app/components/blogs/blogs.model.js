import mongo from '../../utils/mongo';

const blogsSchema = new mongo.instance.Schema(
    { 
        title: String, 
        article: String 
    },
    {
        versionKey: false
    }
);

export default mongo.instance.model('Blog', blogsSchema);
