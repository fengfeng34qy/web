var express = require('express');
var router = express.Router();
var Index = require('../app/controllers/index');
var User = require('../app/controllers/user');
var Article = require('../app/controllers/article');
var Comment = require('../app/controllers/comment');
var Message = require('../app/controllers/message');
var WxMessage = require('../app/controllers/wx-message');
var BaiduSdk = require('../app/controllers/baidu-sdk');
var Wx = require('../app/controllers/wxapi');
var Biaobai = require('../app/controllers/biaobai')

/* GET home page. */
router.get('/', Index.index);
// 注册
router.post('/user/signup', User.signup);
// 登录
router.post('/user/signin', User.signin);

// 注销
router.get('/logout', User.logout);

// 录入文章页
router.get('/admin/article/new', Article.new);

// 创建文章
router.post('/admin/article', Article.save);

// 发布文章
router.post('/admin/publish', Article.articleStateMod);

// 详情页
router.get('/admin/article/:id', Article.detail);

// 更新
router.get('/admin/article/update/:id', Article.update);

// 评论
router.post('/admin/comment', User.signinRequired, Comment.save);

// 主页留言
router.post('/admin/message', Message.save);

// 给前台一个获取主页留言的接口
router.post('/admin/getmessage', Message.getmessage);

// 分页
router.get('/article/results', Index.results);

// 获取文章列表
router.get('/articles/lists', Index.lists);

// 搜索功能
router.get('/article/search', Index.search);

// 删除文章
router.post('/admin/delete', User.signinRequired, User.adminRequired, Index.delete);

// 获取用户信息1
router.post('/user/getUser',User.getUser);

// 获取用户信息2
router.get('/user/info',User.getInfo);

// 语音合成
router.post('/speech/', BaiduSdk.text2audio);

// 微信小程序主页留言
router.post('/wx/message', WxMessage.save);

// 微信小程序获取留言
router.post('/wx/getmessage', WxMessage.getmessage)

// 获取微信api
router.get('/getAccessTokenToXcx', Wx.getAccessToken)

router.post('/wxapi', Wx.wxapi)

router.get('/get', Index.testget);

router.post('/post', Index.testpost);

// 创建表白
router.post('/createBiaobai', Biaobai.createBiaobai)

// 获取表白
router.post('/biaobaiDetail', Biaobai.biaobaiDetail)

router.post('/upload', Index.upload);

// 404页面 - 必须放到最后
router.get('*', function(req, res){
	res.render('404', {
		title: 'No Found'
	})
});

module.exports = router;
