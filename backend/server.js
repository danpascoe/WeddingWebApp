import * as dotenv from 'dotenv';
import express from "express";

import { connectDB } from './config/database.js';
import { router as weddingRouter } from "./routes/wedding.route.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/weddings', weddingRouter)

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});