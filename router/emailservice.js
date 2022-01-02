const express = require("express");
const router = express.Router();
const {verifyEmail}=require("../controller/verifyemail");
const {resetPassword}=require("../controller/resetPassword");


router.post('/verifyemail',verifyEmail);

router.post('/resetpassword',resetPassword);

module.exports=router;