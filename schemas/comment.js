var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var CommentSchema = new Schema({
    article: {type: ObjectId, ref: 'Article'},
    from: {type: ObjectId, ref: 'User'},
    to: {type: ObjectId, ref: 'User'},
    content: String,
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

CommentSchema.pre('save', function(next){
    var user = this;
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else{
        this.updateAt = Date.now()
    }
    next();
});


CommentSchema.statics = {
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

module.exports = CommentSchema;