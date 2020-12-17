define(['backbone', 'article', 'jquery', 'mfp', 'util', 'md5'],function(Backbone, article, $, mfp, util, md5){
    var pageView;
    var App = Backbone.View.extend({
        events: {
            "routed":"路由完成",	//构建页面并dom中生成页面完成
            "warn":"发生警告",
            "ready":"视图加载完成"	//页面完成数据加载后需要触发该事件，router调用相应渲染方法，该方法应该在集合加载数据完成后触发

        },
        initialize: function(){
            console.log('index 初始化完成');
            pageView = this;
            pageView.bindEvent();
        },

        // 初始化绑定事件
        bindEvent: function(){
            $('#loginBtn').on('click', pageView.regShow);
            $('#concelBtn').on('click', pageView.regHide);
            $('#submitBtn').on('click', pageView.register);
            $('.delBtn').on('click', pageView.deleteArticle);
            $('.face').on('click', pageView.selectFace);
        },
        // 注册
        register: function(){
            var name = $('#signupName').val();  //用户名
            var nickname = $('#nickname').val();    //昵称
            nickname = nickname.trim();
            var password = $('#signupPassword').val();  //密码
            var sure = $('#passwordSure').val();  //确认密码

            if(!pageView.checkUserName(name)){
                alert('4-12位数字或字母或_');
                return false;
            }
            if(util.getBytesLength(nickname) > 10){
                alert('昵称格式不正确');
                return false;
            }
            if(!pageView.checkPwd(password, sure)){
                alert('密码输入错误');
                return false;
            }
            if(!pageView.checkFace()){
                alert('请选择头像');
                return false;
            }
            var face = pageView.getFace();
            var post_data = {
                url: 'user/signup',
                data: {
                    name: name,
                    nickname: nickname,
                    password: password,
                    face: face,
                    token: md5('' + +new Date())
                }
            };
            mfp.ajax(post_data, function(response){
                window.location.reload();
            }, function(error){
                console.log(error);
            });
        },
        // 注册弹窗显示
        regShow: function(){
            $('.register').show();
            if(navigator.userAgent.match(/(windows)/i)){
                $('body').css({'overflow':'hidden','padding-right': '17px'});
            }
        },
        // 注册弹窗隐藏
        regHide: function(){
            $('.register').hide();
            if(navigator.userAgent.match(/(windows)/i)){
                $('body').css({'overflow':'auto','padding-right': '0'});
            }
        },

        // 删除文章
        deleteArticle: function(e){
            var id = this.getAttribute('data-id');
            myApp.modal({
                title: '确认删除？',
                confirm: function(){
                    // 调用删除方法
                    article.delArticle(id);
                }
            });
        },

        // 校验用户名是否输入正确
        checkUserName: function(userName){
            var reg = /^(\d|\w+){4,12}$/i;
            if(reg.test(userName)){
                return true;
            }else{
                return false;
            }
        },

        // 校验昵称
        checkNickname: function(nickname){
            var reg = /^\w{2,8}$/;
            if(reg.test(nickname)){
                return true;
            }else{
                return false;
            }
        },

        // 校验密码
        checkPwd: function(pwd1, pwd2){
            if(!pwd1 || !pwd2){
                return false;
            }
            if(pwd1 !== pwd2){
                return false;
            }
            if(pwd1.length < 3 || pwd2.length <3){
                return false;
            }
            return true;
        },

        // 校验头像是否选择
        checkFace: function(){
            var imgs = document.getElementsByClassName('face');
            for(var i=0; i<imgs.length; i++){
                if(imgs[i].className.indexOf('img_select') > -1){
                    return true;
                }
            }
            return false;
        },

        // 选择头像
        selectFace: function(e){
            var imgs = document.getElementsByClassName('face');
            for(var i=0; i<imgs.length; i++){
                imgs[i].classList.remove('img_select');
            }
            this.classList.add('img_select');
        },

        // 获取选中头像
        getFace: function(){
            var imgs = document.getElementsByClassName('face');
            for(var i=0; i<imgs.length; i++){
                if(imgs[i].className.indexOf('img_select') > -1){
                    // return pageView.toDou(i);
                    return imgs[i].src.substr(imgs[i].src.lastIndexOf('/') + 1, 2);
                }
            }
        },
        toDou: function(num){
            return num<10? '0'+num : num;
        }
    });
    return App;
});
