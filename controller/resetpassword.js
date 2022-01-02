const services = require("../services/resetpassword");

module.exports.resetPassword = (req,res)=>{
    const data = services.sendResetPasswordEmail(req.body.username,req.body.email,req.body.token);
    res.json(data);
}