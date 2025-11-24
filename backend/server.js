import express from 'express';
import cors from 'cors';
import config from './config.js';

import productRoute from './routes/productRoute.js';
import adminRoute from './routes/adminRoute.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.get("/", (_, res) => res.send('Backend server running')); 
app.get("/test", (_, res) => res.json(["Hello world"]));

//routes
app.use('/api', productRoute);
app.use('/api', adminRoute);
const PORT = config.port;//gets its stuff from the config.js which in from .env
const HOST = config.host;

export const API_BASE = `http://${HOST}:${PORT}/api`;
console.log(API_BASE);
app.listen(PORT, ()=> console.log(`Server running @ http://${HOST}:${PORT}`));