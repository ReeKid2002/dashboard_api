const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoSchema = new Schema({
    title: String,
    description: String,
    videoLink: String,
    category: String
});

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;