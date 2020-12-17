var User = require('../models/user');
var app = require('../defaultcfg.json');
var fs = require('fs');
// 注册
exports.signup = function(req, res){
    var _user = req.body;
    User.findOne({name: _user.name}, function(err, user){
        if(err){
            console.log(err)
        }
        if(user){
            res.send({H_ret_status: '失败',H_ret_code:'111111',H_ret_desc: '用户已经存在！'});
        }else{
            var user = new User(_user);
            user.save(function(err, user){
                if(err){
                    console.log(err);
                }
                User.findOne({name: _user.name}, function(err, user){
                    req.session.user = user;
                    res.send({H_ret_status: 'S',H_ret_code:'000000',H_ret_desc: '注册成功'});
                })
            })
        }
    });
};
//登录
exports.signin = function(req, res){
    console.log(req.body);
    var _user = req.body.user;
    var name = _user.name;
    var password = _user.password;
    User.findOne({name: name}, function(err, user){
        if(err){
            console.log(err);
        }
        if(!user){
            return res.send({H_ret_code: '111111',H_ret_desc: '用户信息不存在',H_ret_status: 'F'});
        }
        user.comparePassword(password, function(err, isMatch){
            if(err){
                console.log(err);
            }
            if(isMatch){
                var users = {};
                req.session.user = user;
                users.H_ret_code = '000000';
                users.H_ret_desc = '成功';
                users.H_ret_status = 'S';
                users.nickname = user.nickname;
                users.name = user.name;
                users.face = user.face;
                users.token = user.name;
                res.send(users);
            }else{
                console.log('密码错误');
                res.send({H_ret_code: '111111',H_ret_desc:'密码错误!',H_ret_status: 'F'})
            }
        })
    })
};

exports.logout = function(req, res){
    delete req.session.user;
    res.redirect('/');
};

// 获取用户1
exports.getUser = function(req, res, next){
    try {
        var username = req.body.name;
        var users = {};
        console.log('session.user')
        console.log(req.session.user)
        if(req.session && req.session.user){
            users.H_ret_desc = app.H_ret_desc;
            users.H_ret_code = app.H_ret_code;
            users.nickname = req.session.user.nickname;
            users.name = req.session.user.name;
            users.face = req.session.user.face;
            users.token = req.session.user.token;
        }else{
            users = {
                H_ret_desc: '成功',
                H_ret_code: '000000',
                nickname: '',
                name: '',
                face: ''
            };
        }
        console.log('获取到的user')
        console.log(users)
        res.send(users);
    }catch(err){
        console.log(err)
        var oDate = new Date();
        var y = oDate.getFullYear();
        var m = oDate.getMonth() + 1;
        var d = oDate.getDate();
        var data = '' + y + (m<10?'0'+m:m) + (d<10?'0'+d:d);
        var file = 'logs/'+data+'.txt';
        fs.writeFile(file, err, function(err){});
    }

};

// 获取用户2
exports.getInfo = function(req, res, next) {
    console.log(req.query);
    var token = req.query.token;
    var users = {};
    User.findOne({token: token}, function(err, user){
        if(!user){
            return res.send({H_ret_code: '111111',H_ret_desc: '用户信息不存在',H_ret_status: 'F'});
        }
        users.H_ret_desc = app.H_ret_desc;
        users.H_ret_code = app.H_ret_code;
        users.nickname = user.nickname;
        users.name = user.name;
        users.face = user.face;
        users.token = user.token;
        users.role = user.role;
        users.roles = user.roles;
        res.send(users);
    });
};

// 用户登录中间件 User.signinRequired
exports.signinRequired = function(req, res, next){
    var user = req.session.user;
    if(!user){
        return res.send({status: 199,errorStatus: 'F', message: '请先登录！'})
    }
    next();
};

// 用户权限中间件
exports.adminRequired = function(req, res, next){
    var user = req.session.user;
    if(user.role <= 50){
        return res.send({status: 199,errorStatus: 'F', message: '权限不足！'});
    }
    next();
};

