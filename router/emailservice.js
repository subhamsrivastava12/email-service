const express = require("express");
const router = express.Router();
const {verifyEmail}=require("../controller/verifyemail");
const {resetPassword}=require("../controller/resetpassword");
const { friendNotification } = require("../controller/friendnotification");
const { requestNotification } = require("../controller/requestnotification");

router.get('/',(req,res)=>{
    res.send("Email Service");
})
router.post('/verifyemail',verifyEmail);

router.post('/resetpassword',resetPassword);

router.post('/requestnotification',requestNotification);

router.post('/friendnotification',friendNotification);


module.exports=router;