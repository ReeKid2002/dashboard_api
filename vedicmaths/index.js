const express = require('express');
const mongoose = require('mongoose');
const vedicmath = require('../../model/vedicmathsmodel');
const router = express.Router();
const vedicmaths = require('../../model/vedicmathsmodel');
router.get('/',async(req,res)=>{
    try{
const vedicmathscourse = await vedicmath.find({
   
})

console.log(vedicmathscourse);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
