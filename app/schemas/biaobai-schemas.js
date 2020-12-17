var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BiaobaiSchema = new Schema({
    yourname: String,
    hersname: String,
    content: String,
    seqNo: String,
    bgurl: String,
    list: [],
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

BiaobaiSchema.pre('save', function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }else{
        this.meta.updateAt = Date.now()
    }
    next();
});

BiaobaiSchema.static = {
    fetch: function(cb){
        return this
            .find({})
            .sort('meta.update')
            .exec(cb)
    },
    fetchById: function(id, cb){
        return this
            .findOne({_id: id})
            .exec(cb)
    }
};

module.exports = BiaobaiSchema;