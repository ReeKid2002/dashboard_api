const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const app = express();
const vedic = require("./vedicmaths/index");
mongoose.connect("mongodb://127.0.0.1:27017/testdb",{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false});
app.use("/vedic",vedic);
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

//if you found video within range else it will show requires range header
app.get("/video", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range Header");
    }
    const videoPath = "video.mp4";
    const videoSize = fs.statSync("video.mp4").size;

    //Parse range
    const CHUNK_SIZE = 10 ** 6;//10 **6 1 Mb

    const start = Number(range.replace(/\D/g, ""));
    //parse starting byte,range header with string first with non-digit characters with an empty 
    //string 

    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
   //parse the chunk size that can go to end of video size


    const contentlength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,//how far video is
        "Accept-Range": "bytes", //type isbyte
        "Content-length": contentlength,
        "Content-type": "video/mp4", //video type
    };

    res.writeHead(206, headers); //response getting

    const videoStream = fs.createReadStream(videoPath, { start, end });

    videoStream.pipe(res);//video stream in pipes
});

app.get("/vedicmaths", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range Header");
    }
    const videoPath = "vedicmath.mp4";
    const videoSize = fs.statSync("vedicmath.mp4").size;

    //Parse range
    const CHUNK_SIZE = 16 ** 12;//10 **6 1 Mb
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentlength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Range": "bytes",
        "Content-length": contentlength,
        "Content-type": "video/mp4",
    };

    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, { start, end });

    videoStream.pipe(res);
});

app.listen(8000, function () {
    console.log("Listening to port 8000");
})

