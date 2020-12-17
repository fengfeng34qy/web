define(['mfp', 'index'],function(mfp, Index){
    var oUser = document.getElementById('username');
    var username = '';

    if(oUser){
        username = oUser.innerHTML;
    }else{
        username = '';
    }
    var App = {
        getUser: function(){
            var post_data = {
                url: '/user/getUser',
                data: {
                    name: username
                }
            };
            mfp.ajax(post_data, function(response){
                app.userInfo.name = response.name;
                app.userInfo.nickname = response.nickname;
                /* 获取用户信息之后调用index */
                new Index();
            }, function(error){
                app.userInfo = {};
            });
        }
    };
    return App
});