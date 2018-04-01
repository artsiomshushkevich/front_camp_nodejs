import express from 'express';
import BlogsModel from './blogs.model';

const blogsRouter = express.Router();

blogsRouter.get('/', async (req, res, next) => {
    try {
        const blogs = await BlogsModel.find({});
        res.send(blogs);
    } catch(err) {
        next(err);
    }
    
});

blogsRouter.get('/:id', async (req, res, next) => {
    try {
        const blog = await BlogsModel.findOne({_id: req.params.id});
        res.send(blog);
    } catch(err) {
        next(err);
    }
    
});

blogsRouter.delete('/:id', async (req, res, next) => {
    try {
        const result = await BlogsModel.findOneAndRemove({_id: req.params.id})
        res.send(result);
    } catch(err) {
        next(err);
    }
    
});

blogsRouter.put('/:id', async (req, res, next) => {
    try {
        const updatingResult = await BlogsModel.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                new: true
            }
        );
    
        res.send(updatingResult);
    } catch(err) {
        next(err);
    }
    
});

blogsRouter.post('/', async (req, res, next) => {
    try {
        const newBlog = new BlogsModel({
            title: req.body.title,
            content: req.body.content
        });
    
        const savingResult = await newBlog.save();
        res.send(savingResult);
    } catch(err) {
        next(err);
    }
});

export default blogsRouter;