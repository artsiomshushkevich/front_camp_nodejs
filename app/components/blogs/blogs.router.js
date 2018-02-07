import express from 'express';
import BlogsModel from './blogs.model';

const blogsRouter = express.Router();

blogsRouter.get('/', async (req, res) => {
    const blogs = await BlogsModel.find({});
    res.send(blogs);
});

blogsRouter.get('/:id', async (req, res) => {
    const blog = await BlogsModel.findOne({_id: req.params.id});
    res.send(blog);
});

blogsRouter.delete('/:id', async (req, res) => {
    const result = await BlogsModel.remove({_id: req.params.id})
    res.sendStatus(200);
});

blogsRouter.put('/:id', async (req, res) => {
    const updatingResult = await BlogsModel.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            title: req.body.title,
            article: req.body.article
        }
    );

    res.send(updatingResult);
});

blogsRouter.post('/', async (req, res) => {
    const newBlog = new BlogsModel({
        title: req.body.title,
        article: req.body.article
    });

    const savingResult = await newBlog.save();
    res.send(savingResult);
});

export default blogsRouter;