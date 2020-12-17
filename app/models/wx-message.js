var mongoose = require('mongoose');
var MessageSchema = require('../schemas/wx-message');
var Message = mongoose.model('Wxmessage', MessageSchema);

module.exports = Message;