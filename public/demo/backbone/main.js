(function () {
    var root = this;
    require.config({
        //注册的库从加载页面目录算起，相对路径从当前页面baseurl算起
        // baseUrl: document.URL.substring(0, document.URL.lastIndexOf("/") + 1),
        baseUrl: './',
        paths: {
            jquery: '/demo/backbone/js/jquery',
            underscore: '/demo/backbone/js/underscore',
            backbone: '/demo/backbone/js/backbone',
            text: '/demo/backbone/js/text',
            router: '/demo/backbone/js//router',
            FastClick: '/demo/backbone/js/fastclick.js',
            app: '/demo/backbone/js/app'
        }

    });
    //预加载库启动平台和应用
    require(['app'],function (App) {
        root.app = new App();
    });
    document.addEventListener('DOMContentLoaded', function () {
        // FastClick.attach(document.body);
    }, false);

}).call(this);


