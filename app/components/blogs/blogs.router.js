import express from 'express';
import BlogsModel from './blogs.model';

const blogsRouter = express.Router();
const blogsModel = new BlogsModel();

blogsRouter.get('/', (req, res) => {
    res.send(blogsModel.getAll());
});

export default blogsRouter;