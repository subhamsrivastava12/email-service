const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transport = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    }
});




module.exports.sendResetPasswordEmail = async (username,email,token)=>{
    console.log("nodemailer sending mail function");
    console.log(username,email,token);
    transport.sendMail({
        from:process.env.USER,
        to:email,
        subject:"Reset your password",
        html:
        `<div>
        <h1>Reset Password</h1>
        <h2>Hello ${username}</h2>
        <p>.You can reset your password by clicking on the following link</p>
        <a href=http://localhost:3000/email_verify/${token}> Click here</a>
        </div>`
    }).catch((err)=>{
        return {message:err.message,status:500,output:false};
    });

    return {message:"Reset your password using the link sent in the email", status:200 ,output:true};
};