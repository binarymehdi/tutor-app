import express from 'express';
const apirouter = express.Router();

import authRouter from './routes/auth';
import sessionsRouter from './routes/sessions';
// What are the routes we should be using

// check if api is working
apirouter.get('/', (req, res) => {
    res.json({ message: 'API is working !' });
});

// auth routes
apirouter.use('/', authRouter);

// sessions routes
apirouter.use('/sessions', sessionsRouter);



export default apirouter;