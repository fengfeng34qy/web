var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
    title: String,
    url: String,
    author: String,
    content: String,
    state: {
        type: String,
        default: "0"
    },
    stars: {
        type: String,
        default: "1"
    },
    pv: {
        type: Number,
        default: 0
    },
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

ArticleSchema.pre('save', function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }else{
        this.meta.updateAt = Date.now()
    }
    next();
});

ArticleSchema.static = {
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

module.exports = ArticleSchema;