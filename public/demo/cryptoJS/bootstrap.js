(function () {
    var root = this;
    require.config({
        //注册的库从加载页面目录算起，相对路径从当前页面baseurl算起
        baseUrl: document.URL.substring(0, document.URL.lastIndexOf("/") + 1),
        shim: {
            'jquery': {
                exports: '$'
            },
            'underscore': {
                exports: '_'
            },
            // "angular": {
            //     exports: "angular"
            // },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'backbone.iobind': {
                deps: ['underscore', 'jquery', 'backbone'],
                exports: 'Backbone'
            },
            'backbone.iosync': {
                deps: ['underscore', 'jquery', 'backbone'],
                exports: 'Backbone'
            },
            // 'socketio': {
            //     exports: 'io'
            // },
            // 'crypt': {
            //     exports: 'crypt'
            // },
            'smartWizard': {
                deps: ['jquery'],
                exports: '$'
            },
            // 'maskedInput': {
            //     deps: ['jquery'],
            //     exports: '$.mask'
            // },
            // 'jqueryUI': {
            //     deps: ['jquery'],
            // },
            // 'keyboard': {
            //     deps: ['jquery'],
            // },
            // 'kbscramble': {
            //     deps: ['keyboard'],
            // },
            // 'flot': {
            //     exports: '$.flot'
            // },
            // 'flot.pie': {
            //     deps: ['jquery', 'flot'],
            //     exports: '$.flot'
            // },
            // 'flot.stack': {
            //     deps: ['jquery', 'flot'],
            //     exports: '$.flot'
            // },
            // 'threshold': {
            //     deps: ['jquery', 'flot'],
            //     exports: '$.flot'
            // },
            // 'barframe': {
            //     deps: ['jquery', 'flot'],
            //     exports: '$.flot'
            // },
            // 'pdfjs': {
            //     exports: 'PDFJS'
            // },
            // 'iscroll': {
            //     exports: 'iScroll'
            // },
            // 'pdfjsworker': {
            //     exports: 'Pdfjsworker'
            // },
            // 'steps': {
            //     exports: '$.fn.steps'
            // },

        },
        paths: {
            'crypto-js': '../../libs/crypto/crypto',
            'aesUtil': 'aesUtil',
            'app': 'app'
        }

    });
    //fixme
    // alert("bootstrap.js new App注册");
    var onDeviceReady = function () {
        // alert("onDeviceReady开始");
        try {
            //预加载库启动平台和应用
            require(['app'], function (App) {
                // root.app = App();
                //fixme
                // alert("bootstrap.js new App完成");
            });

        } catch (error) {
            window.catchError("bootstrap error: " + error);
        }
    };
        onDeviceReady();

}).call(this);


