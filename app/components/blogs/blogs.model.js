import mongo from '../../utils/mongo';

const blogsSchema = new mongo.instance.Schema(
    { 
        title: String, 
        content: String,
        createdAt: { 
            type: Date, 
            default: Date.now 
        }
    },
    {
        versionKey: false
    }
);

export default mongo.instance.model('Blog', blogsSchema);
