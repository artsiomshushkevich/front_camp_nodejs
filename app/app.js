import express from 'express';
import blogsRouter from './components/blogs/blogs.router';
import path from 'path';
import customLogger from './utils/custom-logger';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use('/blogs', blogsRouter);

app.use((req, res) => {
    customLogger.warn(`Route ${req.url} is not te defined API route!`);
    
    res.render('welcome');
});

export default app;