import express from 'express';
import blogsRouter from './components/blogs/blogs.router';

const app = express();

app.use(express.json());

app.use('/blogs', blogsRouter);

export default app;