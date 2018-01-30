import app from './app/app';
import customLogger from './app/utils/custom-logger';

const port = process.env.PORT || 3000;

app.listen(port, () => customLogger.info(`App started on port ${port}!`));