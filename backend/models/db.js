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
        default: "",
        Date: Date.now()
    },
    hit_count: {
        type: Number,
        default:0
    }
})

const Url = mongoose.model("Url", urlSchema);
export default Url;