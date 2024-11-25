import * as dotenv from 'dotenv';
import express from "express";
import mongoose from 'mongoose';

dotenv.config()

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
    app.listen(process.env.PORT, () => console.log('listening for requests on port', process.env.PORT));
  })
  .catch((err) => console.log(err));