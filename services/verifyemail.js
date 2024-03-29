const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    }
});




module.exports.sendConfirmationEmail = async (username,email,confirmationCode)=>{
    console.log("nodemailer sending mail function");
    const mail=await transport.sendMail({
        from:process.env.USER,
        to:email,
        subject:"Please confirm your email",
        html:
        `<div>
        <h1>Email Confirmation</h1>
        <h2>Hello ${username}</h2>
        <p>.Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:3000/email_verify/${confirmationCode}> Click here</a>
        </div>`
    }).catch((err)=>{
        return {message:err.message,status:500,output:false};
    });
    console.log("mail",mail);
    return {message:"verify your email", status:200,output:true};
};