const express=require('express');
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const cors = require('cors');
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const db='mongodb+srv://max:pboss@cluster0-2bpz8.mongodb.net/events?retryWrites=true&w=majority';

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{
    if(err){
        console.log("error => "+err);
    }else{
        console.log('mongo db works');
    }
});

const api=require('./routs/api');
app.use('/api',api);

app.use('/',(req,res,next)=>{
  res.status(200).json({
      message:'hello'
    });
});

app.listen(port,()=>{
    console.log("server is listerning at "+port);
});