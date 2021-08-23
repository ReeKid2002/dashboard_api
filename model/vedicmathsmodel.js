const mongoose = require('mongoose');
const Video = require('./videoModel');
const vedicmathSchema = new mongoose.Schema({
    unit1: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }],
    unit2: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }],
    unit3: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }],
    unit4: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }]
})
const VedicMath = mongoose.model("VedicMath",vedicmathSchema);
module.exports = VedicMath;