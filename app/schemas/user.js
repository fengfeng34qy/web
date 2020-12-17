var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    token: String,
    name: {
        unique: true,
        type: String
    },
    role: {
        type: Number,
        default: 1
    },
    roles: {
        type: Array,
        default: ["editor"]
    },
    nickname: String,
    password: String,
    face: String,
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

UserSchema.pre('save', function(next){
    var user = this;
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else{
        this.updateAt = Date.now()
    }

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next()
        })
    })
});

UserSchema.methods = {
    comparePassword: function(_password, cb){
        bcrypt.compare(_password, this.password, function(err, ismatch){
            if(err){
                console.log(err)
            }
            cb(null, ismatch)
        })
    }
};

UserSchema.statics = {
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

module.exports = UserSchema;