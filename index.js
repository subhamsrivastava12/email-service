const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const Emailservice = require('./router/emailservice');

dotenv.config();

const app=express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',Emailservice);

const PORT = process.env.PORT || 5000;


app.get('/ping',(req,res)=>{
    res.send("Hello World");
});

app.listen(PORT,()=>console.log("server is running"));
