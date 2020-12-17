var Message = require('../models/wx-message');

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
    Message.find({})
    .sort({'meta.updateAt': -1})
    .exec(function(err, messages) {
        if (err) {
            console.log(err)
        }
        res.send(messages);
    })
};

