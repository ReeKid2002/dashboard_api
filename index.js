const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 8000;
mongoose.connect("mongodb://localhost:27017/testDB",{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false});
app.use("/api", require('./route/api'));
app.get("/", function(req,res){
    res.send('Hello From Server');
});
app.listen(PORT, function () {
    console.log(`Listening to Port ${PORT}`);
})

