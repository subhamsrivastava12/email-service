const {sendResetPasswordEmail} = require("../services/resetpassword");

module.exports.resetPassword = async (req,res)=>{
    sendResetPasswordEmail(req.body.username,req.body.email,req.body.token)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })

    
}