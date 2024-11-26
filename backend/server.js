import * as dotenv from 'dotenv';
import express from "express";

import { connectDB } from './config/database.js';
import weddingRouter from './routes/wedding.route.js';
import guestRouter from './routes/guests.route.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use('/api/weddings', weddingRouter);
app.use('/api/guests', guestRouter);

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});