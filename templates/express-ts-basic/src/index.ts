import express from 'express';
import morgan from 'morgan';
import router from './routes/index';

const app = express();
app.use(morgan('dev'));

app.use('/api/v1', router);

const port = 8080;

app.listen(port, '0.0.0.0', () => {
    console.log(`App started at port:${port}`);
});
