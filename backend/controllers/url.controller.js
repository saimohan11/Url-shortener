import express, { application } from 'express';
import Url from "../models/db.js";
import ShortUniqueId from "short-unique-id";
const app = express();

const  shortId = new ShortUniqueId({length : 5});

app.use(express.json())

export const test = (req,res)=>{
    res.status(201).json({
        msg:"your api is working"
    })
}

export const addUrl = async(req,res)=>{
    const longurl = req.body.longurl;
    const shorturl = shortId.rnd();

    await Url.create({
        long_url : longurl,
        short_url : shorturl
    })
    .then((data)=>{
        console.log("Data is added to database")
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log(err)
        if (err.code == "Err_dup_entry") {
            return res.status(409).send("Url aleady exists")
        } else {
            return res.status(500).send("Internal Server Error");
        }
    })
};

export const redirectUrl = async(req,res)=>{
    const shortId = req.params.shortId;
    let url = await Url.findOne({short_url:shortId})
    try {
        if (url) {
            await url.updateOne(
                {url:req.params.short_url},
                {$inc:{clicks:1}}
            );
            //console.log(url);
            res.redirect(url.long_url);
        } else {
            res.status(404).json("url not found in database");
        }
    } catch(err) {
        console.log(err)
        res.status(500).json('server error')
    }
}
