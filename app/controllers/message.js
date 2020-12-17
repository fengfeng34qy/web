var Message = require('../models/message');

exports.save = function (req, res) {
    var _message = req.body.message;
    var message = new Message(_message);
    message.save(function(err, message){
        if(err){
            console.log(err);
        }
        res.send(message);
    })
};
exports.getmessage = function(req, res){
    Message.find({}, function(err, messages){
        if(err){
            console.log(err);
        }
        res.send(messages);
    })
};

