import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import artistRoute from './routes/artist.route.js';
import eventRoute from './routes/event.route.js';
import arenaRoute from './routes/arena.route.js';

const app = express();

// middleware that only parses json and only looks at requests where the Content-Type header matches the type option
app.use(express.json());
// set cors origin for client url
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/artist', artistRoute);
app.use('/api/event', eventRoute);
app.use('/api/arena', arenaRoute);

app.listen(8800, () => console.log('Server is working on 8800 port!'));
