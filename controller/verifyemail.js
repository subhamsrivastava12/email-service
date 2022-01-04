const {sendConfirmationEmail} = require("../services/verifyemail");

module.exports.verifyEmail = async (req,res)=>{
    sendConfirmationEmail(req.body.username,req.body.email,req.body.confirmationCode)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
}