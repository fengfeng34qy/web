define(['jquery'],function($, mloading){
    function Util() { }

    // 获取字符串字节
    Util.prototype.getBytesLength = function(str){
    	return str.replace(/[^\x00-\xff]/gi, "--").length; 
    };

    // 防抖动
    Util.prototype.debounce = function(g,ms,flag){
    	var t = null;
	    return function(){
	      	var n = this;
	      	var l = arguments;
	      	var C = function(){
	        	t=null,
	        	flag||g.apply(n,l)
	      	};
	      	var A=flag && !t;
	      	clearTimeout(t);
	      	t=setTimeout(C,ms);
	      	A&&g.apply(n,l);
	    }
    };

    var util = new Util();
    

    return util;
});