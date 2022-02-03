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
        subject:"Friend Request accepted",
        html:
        `<div>
        <h1>Request accepted</h1>
        <h2>Hello ${senderName}</h2>
        <p>${receiverName} has accepted your friend request</p>
        </div>`
    }).catch((err)=>{
        return {message:err.message,status:500,output:false};
    });

    return {message:"Acceptance notification sent successfully", status:200 ,output:true};
};