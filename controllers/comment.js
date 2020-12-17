var Comment = require('../models/comment');

exports.save = function (req, res) {
    var _comment = req.body.comment;
    var articleId = _comment.article;
    var comment = new Comment(_comment);
    comment.save(function(err, comment){
        if(err){
            console.log(err);
        }
        res.redirect('/admin/article/'+articleId);
    })
};

