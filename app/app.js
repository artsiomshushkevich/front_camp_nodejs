import express from 'express';
import blogsRouter from './components/blogs/blogs.router';
import path from 'path';
import customLogger from './utils/custom-logger';
import mongo from './utils/mongo';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/blogs', blogsRouter);

app.use((req, res) => {
    const errorMessage = `Route ${req.url} is not te defined API route!`;
    customLogger.warn(errorMessage);
    
    res.status(404).send({
        errorMessage: errorMessage
    });
});

app.use(function(err, req, res, next) {
    customLogger.error(err.stack);
    res.status(500).send({
        errorMessage: err.message
    });
});
  

export default app;