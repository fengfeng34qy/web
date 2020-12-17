var Article = require('../models/article');
var Message = require('../models/message');
var User = require('../models/user');
var fs = require('fs');

exports.index = function(req, res, next) {

    var _user = req.session.user;
    var count = 5;
    Article
        .find({})
        .limit(10)
        .sort({'meta.updateAt': -1})
        .exec(function(err, articles){
            Message
                .find({})
                .sort({'meta.updateAt': -1})
                .exec(function(err, messages){
                    User
                        .find({})
                        .sort({'meta.updateAt': -1})
                        .exec(function(err, users){
                            var len = messages.length;
                            var results = messages.slice(0,count);
                            res.render('index', {
                                title: '孙锋锋的网络日志',
                                user: _user,
                                messagelen: len,
                                articles: articles,
                                users: users,
                                messages: results
                            });
                        })
                })
        })
};

exports.results = function(req, res, next) {
    var count = 10;
    var page = parseInt(req.query.page);
    var index = page * count;
    Article
        .find({})
        // .limit(2)
        // .skip(index)
        .sort({'meta.updateAt': -1})
        .exec(function(err, articles){
            var results = articles.slice(index, index+count);
            res.render('results', {
                title: '更多文章',
                keyword: '',
                currentPage: (page+1),
                totalPage: Math.ceil(articles.length/count),
                articles: results
            });
        })
};

exports.lists = function(req, res, next) {
    var page = parseInt(req.query.page);
    var limit = parseInt(req.query.limit);
    var index = page * 20 - 20;
    console.log(index, limit);
    Article
        .find({})
        // .limit(limit)
        // .skip(page)
        .sort({'meta.updateAt': -1})
        .exec(function(err, articles){
            var results = articles.slice(index, index + limit);
            res.send({status: 200,items: results, total:articles.length, message: '成功'});
        })
}

exports.search = function(req, res, next) {
    var count = 10;
    var page = parseInt(req.query.page);
    var index = page * count;
    var keyword = req.query.keyword;
    console.log(count, page, index, keyword);
    Article
        .find({title: new RegExp(keyword+'.*', 'i')})
        .sort({'meta.updateAt': -1})
        .exec(function(err, articles){
            console.log(articles);
            var results = articles.slice(index, index+count);
            res.render('results', {
                title: '更多文章',
                keyword: '',
                currentPage: (page+1),
                totalPage: Math.ceil(articles.length/count),
                articles: results
            });
        })
};

exports.delete = function(req, res, next){
    var id = req.body.data.id;
    console.log(req.body);
    if(id){
        Article.remove({_id: id}, function(err, article){
            if(err){
                console.log(err);
            }else{
                res.send({status: 200,errorStatus: 'S', message: '成功'});
            }
        })
    }
};

exports.upload = function(req, res, next) {
    let data = req.body
    console.log(data)
    // console.log(Buffer.from('base64_Data'))
    res.send({status: 200,data: 'get测试数据', message: '成功'});
    // fs.writeFileSync('/home/work/project/web/public/mp3/2.mp3', blob)
    //     .then((response) => {
    //         console.log(response)
    //     })
}

exports.testget = function(req, res, next){
    res.send({status: 200,data: 'get测试数据', message: '成功'});
};

exports.testpost = function(req, res, next){
    res.send({status: 200,data: 'post测试数据', message: '成功'});
}

