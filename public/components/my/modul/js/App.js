(function(){
    /* 构造函数 */
    function App(option){
        option = option || {};
        option.timer = null;

        this.that = this;
    }
    /*
    * 模态弹窗依赖方法
    * */
    function addClass(node, className){
        var current = node.className || '';
        if((' '+current+' ').indexOf(className) === -1){
            node.className = current? (current+' '+className) : className;
        }
    }
    function delClass(node, className){

        var current = node.className || "";
        node.className = (" " + current + " ").replace(" " + className + " ", " ").trim();
    }
    function html2node(h) {
        var container = document.createElement('div');
        container.innerHTML = h;
        return container.children[0];
    }
    function animateClass( node, className , callback){

        function onAnimateEnd(){

            // 2. 移除类名
            delClass(node, className);

            node.removeEventListener( 'animationend', onAnimateEnd);
            // 3. 执行回调
            callback && callback();
        }

        // 1. 添加类名触发animation
        addClass(node, className);
        node.addEventListener( 'animationend', onAnimateEnd, false)
    }
    /*
    * 模态弹窗 author=sunfengfeng
    * */
    App.prototype.modal = function(option){
        option = option || {};
        var template = '<div id="app-modal">\
							<div class="m-modal modal_align"></div>\
							<div class="modal_wrap">\
							  <div class="modal_head"></div>\
							  <div class="modal_body"></div>\
							  <div class="app-modal_foot">\
								<a class="confirm" href="javascript:;">确认</a>\
								<a class="cancel" href="javascript:;">取消</a>\
							  </div>\
							</div>\
					  </div>';

        var container = html2node(template);
        var main_con = container.children[0];
        var main_title = container.getElementsByClassName('modal_head')[0];
        var main_body = container.getElementsByClassName('modal_body')[0];
        if(option.content && (typeof option.content) === 'string'){
            main_body.innerHTML = option.content;
        }
        if(option.title && (typeof option.title) === 'string'){
            main_title.innerHTML = option.title;
        }

        function hideModal(option){
            delClass(container, 'app-modal-in');
            animateClass(container, 'app-modal-out', function(){
                document.body.removeChild(container);
                delClass(document.body, 'sui_body_hide');
            });
            if(option && (typeof option) === 'function'){
                option();
            }
        }
        _initEvent();
        function _initEvent(){
            container.querySelector('.confirm').addEventListener('click',function(){
                hideModal(option.confirm);
            });
            container.querySelector('.cancel').addEventListener('click', function(){
                hideModal(option.concel);
            });
            show();
        }
        function show(){
            document.body.appendChild(container);
            addClass(main_con, 'app-modal-in');
            addClass(document.body, 'sui_body_hide');
        }
    };

    /*隐藏弹窗*/
    App.prototype.hide = function(){
        var container = document.getElementById('app-modal');
        delClass(container, 'app-modal-in');
        animateClass(container, 'app-modal-out', function(){
            document.body.removeChild(container);
            delClass(document.body, 'sui_body_hide');
        });
    };
    
    
    


    /*
    * 防抖动事件
    * 用法: btn.onclick = app.debounce(cb, ms, flag)
    * */
    App.prototype.debounce = function(cb, ms, flag){
        var t = null;
        return function(){
            var n = this;
            var l = arguments;
            var C = function(){
                t=null;
                flag||cb.apply(n,l);
            };
            var A=flag && !t;
            clearTimeout(t);
            t=setTimeout(C,ms);
            A&&cb.apply(n,l);
        }
    };

    /*
    * 小写金额加千分符
    * */
    App.prototype.FormateMoney = function(money){
        money = money - 0;
        let absMoney;
        let Money;
        let result;
        if (money < 0) {
            absMoney = Math.abs(money); //取绝对值
            Money = absMoney.toFixed(2).toString();
            result = '-' + Money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        } else {
            Money = money.toFixed(2).toString();
            result = Money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        }
        return result;
    }

    // 支持commonjs
    // if (typeof exports === 'object') {
    //     module.exports = new App();
    //     // 支持amd
    // } else if (typeof define === 'function' && define.amd) {
    //     define([], function() {
    //         return new App();
    //     });
    // } else {
    //     // 直接暴露到全局
    //
        window.myApp = new App();
    // }
})();
