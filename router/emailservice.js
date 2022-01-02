const express = require("express");
const router = express.Router();
const {verifyEmail}=require("../controller/verifyemail");
const {resetPassword}=require("../controller/resetpassword");

router.get('/',(req,res)=>{
    res.send("Email Service");
})
router.post('/verifyemail',verifyEmail);

router.post('/resetpassword',resetPassword);

module.exports=router;