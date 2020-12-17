var Article = require('../models/article');
var Comment = require('../models/comment');
var _ = require('underscore');
exports.new = function (req, res) {
    res.render('newarticle', {
        article: {}
    })
};

exports.save = function (req, res) {
    var id = req.body.article._id;
    var articleObj = req.body.article;
    var _article;
    if(id){
        Article.findById(id, function(err, article){
            if(err){
                console.log(err);
            }
            _article = _.extend(article, articleObj);
            _article.save(function(err, article){
                if(err){
                    console.log(err);
                }
                res.redirect('/');
            })
        })
    }
    else{
        Article.find({}, function(err, article){
            if(err){
                console.log(err);
            }
            var article = new Article(articleObj);
            article.save(function(err, article){
                if(err){
                    console.log(err);
                }
                // res.redirect('/admin/article/' + article._id)
                res.send(article);
            })
        })
    }
};

exports.detail = function (req, res) {
    var id = req.params.id;
    Article.update({_id: id}, {$inc: {pv: 1}}, function(err){
       if(err){
           console.log(err);
       }
    });
    Article.findById({_id: id}, function(err, article){
        if(!article){
            res.send({message: "数据没有找到!"});
            return;
        }
        Comment
            .find({article: id})
            .populate('from','name')
            .exec(function(err, comments){
                console.log(comments);
                res.render('detail', {
                    title: article.title,
                    article: article,
                    comments: comments
                })
            })
    })
};

exports.update = function(req, res){
    var id = req.params.id;
    var user = req.session.user  || {};
    if(id){
        Article.findById(id, function(err, article){
            if(!article){
                res.send({message: "数据没有找到!"});
                return;
            }
            if(article.author === '匿名'){
                res.render('newarticle', {
                    article: article,
                    title: '个人空间-更新文章',
                    anony: ''
                })
            }else if(user.name === article.author){
                res.render('newarticle', {
                    article: article,
                    title: '个人空间-更新文章'
                })
            }else{
                res.send({status: 201,message: '只能修改自己的文章'})
            }
        })
    }
};

exports.articleStateMod = function(req, res) {
    console.log(req.body.article)
    var id = req.body.article._id;
    var articleObj = {
        state: '1'
    }
    var _article;
    if(id){
        Article.findById(id, function(err, article){
            if(err){
                console.log(err);
            }
            _article = _.extend(article, articleObj);
            _article.save(function(err, article){
                if(err){
                    console.log(err);
                }
                res.send({H_ret_code:'000000', H_ret_desc:'成功', H_ret_status: 'S' });
            })
        })
    }
    else{
        res.send({H_ret_code:'222222', H_ret_desc:'没有找到id为:' + id + '的文章', H_ret_status: 'F' });
    } 
}
