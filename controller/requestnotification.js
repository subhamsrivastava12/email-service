const {sendRequestnotification} = require("../services/requestnotification");

module.exports.requestNotification = async (req,res)=>{
    sendRequestnotification(req.body.senderName,req.body.email,req.body.receiverName)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
}