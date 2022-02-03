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




module.exports.sendFriendnotification = async (senderName,email,receiverName)=>{
    console.log("nodemailer sending mail function");
    console.log(senderName,receiverName);
    transport.sendMail({
        from:process.env.USER,
        to:email,
        subject:"Friend request notification",
        html:
        `<div>
        <h1>Friend Request</h1>
        <h2>Hello ${receiverName}</h2>
        <p>.${senderName} has sent you the friend request</p>
        </div>`
    }).catch((err)=>{
        return {message:err.message,status:500,output:false};
    });

    return {message:"Request notification sent successfully", status:200 ,output:true};
};