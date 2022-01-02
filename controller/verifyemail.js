const services = require("../services/verifyemail");

module.exports.verifyEmail = (req,res)=>{
    const data = services.sendConfirmationEmail(req.body.username,req.body.email,req.body.confirmationCode);
    res.json(data);
}