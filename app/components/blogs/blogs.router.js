import express from 'express';
import BlogsModel from './blogs.model';

const blogsRouter = express.Router();
const blogsModel = new BlogsModel();

blogsRouter.get('/', (req, res) => {
    res.send(blogsModel.getAll());
});

blogsRouter.get('/:id', (req, res) => {
    res.send(blogsModel.getOneById(+req.params.id));
});

blogsRouter.delete('/:id', (req, res) => {
    res.send(blogsModel.deleteOneById(+req.params.id));
});

blogsRouter.put('/:id', (req, res) => {
    const updatedBlog = {
        id: +req.params.id,
        title: req.body.title,
        article: req.body.article
    };

    res.send(blogsModel.updateOne(updatedBlog));
});

blogsRouter.post('/', (req, res) => {
    const newBlog = {
        title: req.body.title,
        article: req.body.article
    };

    res.send(blogsModel.insertOne(newBlog));
});

export default blogsRouter;