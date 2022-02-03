const {sendFriendnotification} = require("../services/friendnotification");

module.exports.friendNotification = async (req,res)=>{
    sendFriendnotification(req.body.senderName,req.body.email,req.body.receiverName)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
}