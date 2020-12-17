(function(){
    require.config({
        baseUrl: '/javascripts/module',
        paths: {
            jquery: '/libs/jquery/dist/jquery',
            backbone: '/libs/backbone/backbone',
            underscore: '/libs/underscore/underscore',
            mloading: 'jquery.mloading',
            md5: '/libs/js-md5/src/md5',
            // jqm: '/libs/jquery-mobile/jquery.mobile-1.4.5',
            article: '/javascripts/module/article',
            user: '/javascripts/module/user',
            mfp: '/javascripts/module/mfp',
            util: '/javascripts/module/util',
            userInfo: '/javascripts/module/userinfo',
            app: '/app',
            defaultcfg: '/defaultcfg',
            index: '/index'
        }
    });

    require(['app'], function(App){
        window.app = new App();
    });
})();