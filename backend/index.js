import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import test from "../backend/routes/urlshort.js"
import url from "./routes/urlshort.js"
import shorten from "./routes/urlshort.js"
// import { userSignup } from './controllers/url.controller.js';
dotenv.config();
const app = express();
const port = 3001;


mongoose.connect(process.env.MONGO_URI)
.then(async ()=>{console.log("mongodb connected")})
.catch((err)=>{
    console.error(err);
})

app.use(express.json());
// routes

app.use("/",test);

app.use("/test",url);

app.use("/",shorten);


mongoose.connection.on('open',()=>{
    app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    });
})
