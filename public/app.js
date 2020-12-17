define(['backbone', 'user'],function(Backbone, user){
    var App = Backbone.View.extend({
        events: {
            "routed":"路由完成",	//构建页面并dom中生成页面完成
            "warn":"发生警告",
            "ready":"视图加载完成"	//页面完成数据加载后需要触发该事件，router调用相应渲染方法，该方法应该在集合加载数据完成后触发

        },
        initialize: function(){
            console.log('app 初始化完成');
            // $.mobile.loading('show');
            this.cfg = {
                success: {
                    "H_ret_desc":"成功",
                    "H_ret_code":"000000",
                    "H_ret_status": "S"
                },
                error: {
                    "H_ret_desc":"失败",
                    "H_ret_code":"111111",
                    "H_ret_status": "F"
                }
            };
            this.userInfo = {};
            user.getUser();
        }
    });
    return App;
});
