import mongoose from "mongoose";

const urlSchema =  new mongoose.Schema({
    long_url : {
        type:String,
        required:true,
    },
    short_url: {
        type: String,
        required:true,
        unique: true,
    },
    clicks: {
        type: Number,
        required:true,
        default: 0
    }
})

const Url = mongoose.model("Url", urlSchema);
export default Url;