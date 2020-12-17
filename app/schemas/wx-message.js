var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;
var MessageSchema = new Schema({
    message: String,
    name: String,
    nickname:String,
    content: String,
    date: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

MessageSchema.pre('save', function(next){
    var user = this;
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
        this.date = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log(Date.now())
    }else{
        this.updateAt = Date.now()
    }
    next();
});


MessageSchema.statics = {
    fetch: function(cb){
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    fetchById: function(id,cb){
        return this
            .findOne({_id: id})
            .exec(cb)
    }
};

module.exports = MessageSchema;