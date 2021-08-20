const express = require('express');
const mongoose = require('mongoose');
const vedicmath = require('../../model/vedicmathsmodel');
const router = express.Router();
const vedicmaths = require('../../model/vedicmathsmodel');
router.get('/',(req,res)=>{
const vedicmathscourse = vedicmath.find({
    console.log(vedicmathscourse);
})
})
