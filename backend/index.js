import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import test from "../backend/routes/urlshort.js"
// import { userSignup } from './controllers/url.controller.js';
dotenv.config();
const app = express();
const port = 3000;


mongoose.connect(process.env.MONGO_URI)
.then(async ()=>{console.log("mongodb connected")})
.catch(()=>{
    console.error('Error connecting to MongoDB');
})

app.use(express.json());
// routes

app.use("/",test);

mongoose.connection.on('open',()=>{
    app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    });
})
