const mongoose =require('mongoose');
const vedicmathSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
})
const vedicmath = mongoose.model("vedicmaths",vedicmathSchema);
const vedicmaths = new vedicmath({
    title:"maths",
    description:"maths tutorial",
    link:"linkofmathsvideo"
    
    
})
vedicmaths.save();
module.exports = vedicmath;