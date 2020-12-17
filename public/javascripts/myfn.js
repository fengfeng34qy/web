/*
*. 获取id、class封装  g()
*. domReady封装
*. getClass
*. getStyle封装
*. 获取偏移量( offsetLeft/offsetTop ) getLeft(ele) / getTop(ele)
*. 获取浏览器窗口大小 getViewport() 返回拥有属性width/height的对象
*. 获取样式表CSSStyleSheet封装
*. move运动框架
*. ajax封装
*. jsonp封装
*. 角度转弧度 (弧度转角度)
*. 碰撞检测
*. 找最小数 findMin(arr)
*. 找最大数 findMax(arr) 251行
*. 小于10补零 (toDou)
*. 获取每月由多少天
*. 获取(设置)元素中的文本内容  getInnerText(ele) / setInnerText(ele,str)
*. 判断是否ie浏览器 ( isIE )
*. String原型添加trim方法 (去掉字符串空格)
*. 数组去重 (原型上面的方法)
*. 随机数 (rnd | sjs)两种
*. window.requestAnimationFrame封装
*. 返回顶部
*. html内容转实体字符
*. 原型继承封装    321行
*. 删除指定ClassName(原型方法)
* 全角转半角
* 防抖动事件
*/
function g(str){
	if(str.charAt(0)=='#'){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=='.'){
		return document.getElementsByClassName(str.substring(1));
	}else{
        return null;
    }
}
function getClass(parent,clazz){
	if(parent.getElementSByClassName){
		return parent.getElementsByClassName(clazz);
	}else{
		var aEle=document.getElementsByTagName('*');
		var arr=[];
		var reg=new RegExp('\\b'+clazz+'\\b');
		for(var i=0; i<aEle.length; i++){
			if(reg.test(aEle[i].className)){
				arr.push(aEle[i]);
			}
		}
		return arr;
	}
}
function domReady(fn){
    if(window.addEventListener){
        window.addEventListener('DOMContentLoaded',function(){
            fn && fn();
        },false);
    }else{
        document.onreadystatechange=function(){
            if(document.readyState=='complete'){
                fn && fn();
            }
        }
    }
}
// 将HTML转换为节点
function html2node(str){
    var container = document.createElement('div');
    container.innerHTML = str;
    return container.children[0];
}
//随机数
function rnd(n,m){
    return parseInt(Math.random()*(m-n))+n;
}
function sjs(n,m){
    return Math.random()*(m-n)+n;
}
function getStyle(obj,name){
    return (obj.currentStyle || window.getComputedStyle(obj,false))[name];
}
function getStyleSheet(ele){
    return ele.sheet || ele.styleSheet;
}
function getLeft(ele){
    var actualLeft = ele.offsetLeft;
    var current = ele.offsetParent;
    while(current != null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
function getTop(ele){
    var actualTop = ele.offsetTop;
    var current = ele.offsetParent;
    while(current != null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
function getViewport(){
    if(document.compatMode == 'BackCompat'){
        return {
            width: document.body.clientWidth,
            height: document.body.height
        }
    }else{
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}
function move(obj,json,options){
    clearInterval(obj.timer);
    options=options || {};
    options.time=options.time || 800;
    options.type=options.type || 'ease-out';

    var iCount=Math.ceil(options.time/30);
    var start={};
    var dis={};
    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        if(isNaN(start[name])){
            switch(name){
                case 'width':
                    start[name]=obj.offsetWidth;
                    break;
                case 'height':
                    start[name]=obj.offsetHeight;
                    break;
                case 'left':
                    start[name]=obj.offsetLeft;
                    break;
                case 'top':
                    start[name]=obj.offsetTop;
                    break;
                case 'opacity':
                    start[name]=1;
                    break;
            }
        }
        dis[name]=json[name]-start[name];
    }

    var n=0;
    obj.timer=setInterval(function(){
        n++;
        for(var name in json){
            //n*dis[name]/iCount
            // dis[name]*n/iCount
            switch(options.type){
                case 'linear':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*Math.pow(a,3);
                    break;
                case 'ease-out':
                    var a=1-n/iCount;
                    var cur=start[name]+dis[name]*(1-Math.pow(a,3));
                    break;
            }

            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+(cur*100)+')';
            }else{
                obj.style[name]=cur+'px';
            }

        }
        if(n==iCount){
            clearInterval(obj.timer);
            options.end && options.end();
        }
    },30);
}
function get2Url(data){
    var arr=[];
    data.t=Math.random();

    for(var name in data){
        arr.push(name+'='+data[name])
    }
    return arr.join('&');
}
function ajax(json){
    json=json || {};
    if(!json.url){
        console.log('url未传参');
        return;
    }

    json.time=json.time || 30000;
    json.type=json.type || 'GET';
    json.data=json.data ||{};

    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
    }
    var timer=null;
    switch(json.type.toUpperCase()){
        case 'GET':
            oAjax.open('GET',json.url+'?'+get2Url(json.data),true);
            oAjax.send();
            break;
        case 'POST':
            oAjax.open('POST',json.url,true);
            oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            oAjax.send(get2Url(json.data));
            break;
    }

    json.Loading && json.Loading();

    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status>=200 && oAjax.status<300 ||oAjax.status==304){
                json.success && json.success(oAjax.responseText);
            }else{
                json.error && json.error(oAjax.status);
            }
            clearTimeout(timer);
        }
    }

    timer=setTimeout(function(){
        console.log('网络超时！');
        oAjax.onreadystatechange=null;
    },json.time);
}
//jsonp
function jsonp(json){
    json=json || {};
    if(!json.url){
        return;
    }
    json.data=json.data||{};
    json.cb=json.cb||'cb';

    var fnName='jsonp_'+Math.random();
    fnName=fnName.replace('.','');
    var oHead=document.getElementsByTagName('head')[0];
    window[fnName]=function (json2){
        json.fnSucc && json.fnSucc(json2);
    };
    var arr=[];
    json.data[json.cb]=fnName;
    for(var name in json.data){
        arr.push(name+'='+json.data[name]);
    }
    var oS=document.createElement('script');
    oHead.appendChild(oS);
    oS.src=json.url+'?'+arr.join('&');
    oHead.removeChild(oS);
}
//角度转弧度
function a2d(n){
    return n*Math.PI/180;
}
//弧度转角度
function d2a(n){
    return n*180/Math.PI;
}
//碰撞检测
function testColl(obj,obj1){
	var l=obj.offsetLeft;
	var t=obj.offsetTop;
	var r=obj.offsetLeft+obj.offsetWidth;
	var b=obj.offsetTop+obj.offsetHeight;

	var l1=obj1.offsetLeft;
	var t1=obj1.offsetTop;
	var r1=obj1.offsetWidth+l;
	var b1=obj1.offsetHeight+t;
	if(r>l1 && b>t1 && l<r1 && t<b1){
		return true;
	}else{
		return false;
	}
}
//找最小数
function findMin(arr){
	var min=9999;
	var minIndex=0;
	for(var i=0; i<arr.length; i++){
		if(arr[i]<min){
			min=arr[i];
			minIndex=i;
		}
	}
	return arr[minIndex];
}
//找最大数
function findMax(arr){
    return Math.max.apply(Math, arr);
}
//补零
function toDou(n){
    // if(n<0){
    //     return '0'+n;
    // }else{
    //     return ''+n;
    // }
	return n<10? '0'+n:'' + n;
}
//获取每月有多少天
function getDate(year, month){
	var date = new Date(year, month, 0);
	return date.getDate();
}
//获取元素中的文本内容
function getInnerText(ele){
    return (typeof ele.textContent == 'String')?
    ele.textContent:ele.innerText;
}
function setInnerText(ele, text){
    if(typeof ele.textContent == 'String'){
        ele.textContent = text;
    }else{
        ele.innerText = text;
    }
}
function isIE(){
    return (navigator.userAgent.toLowerCase().indexOf('msie') != -1)
}
//去空格
String.prototype.trim = function(){
	return this.replace(/^\s*|\s*$/g, '');
};
// 删除指定ClassName
// Object.prototype.removeClass = function(str){
//     var oldClass = this.className;
//     if(oldClass.indexOf(str) > -1){
//         oldClass=oldClass.replace(str,'');
//     }else{
//         console.log('对象中没有找到:'+str)
//     }
//     var car = oldClass.split(/\s+/);
//     var newClass = car.join(' ');
//     this.className = newClass;
//     return this;
// };
//数组去重
Array.prototype.unique = function(){
    var result = [];
    this.forEach(function(v){
        if(result.indexOf(v) < 0){
            result.push(v);
        }
    });
    return result;
};
//数组去重方法2
var unique2 = function(arr, newArr){
    var num;
    if(-1 === arr.indexOf(num==arr.shift())){
        newArr.push(num);
    }
    arr.length && unique2(arr, newArr);
};
// //返回顶部
function backTop(obj, icount){
    var start = document.documentElement.scrollTop || document.body.scrollTop;
    var init = start;
    (function moveFrame(){
        if(start>0){
            start-=init/icount;
            document.body.scrollTop=document.documentElement.scrollTop=start;
            window.requestAnimationFrame(moveFrame);
        }else{
          start=null;
          init=null;
          return obj;
        }
    })()
}
// //html内容转实体字符
function htmlEscape(text){
    return text.replace(/[<>"?]/g, function(match,pos,originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    })
}
// 原型继承
function object(o){function F(){} F.prototype=o;return new F();}
//requestAnimationFram方法封装
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] +
          'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}());
//将utils定义为window对象下的一个属性
window.utils = {};
window.utils.containsPoint = function (rect, x, y){
    return !(x<rect.x||x>rect.x+rect.width||y<rect.y||y>rect.y+rect.height);
};
//在utils对象上定义捕获坐标的方法
window.utils.captureMouse = function(element){
	//定义一个名为mouse的对象
	var mouse = {x:0,y:0}

	//为元素绑定mousemove事件
	element.addEventListener('mousemove',function(event){
		var x,y;
		//获取鼠标位于当前屏幕的位置，并作兼容处理
		if(event.pageX||event.pageY){
			x = event.pageX;
			y = event.pageY;
		}else{
			x = event.clientX + document.body.scrollLeft+document.documentElement.scrollLeft;
			y = event.clientY + document.body.scrollTop +document.documentElement.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;
		mouse.x = x;
		mouse.y = y;
	},false);
	return mouse;
};

function toData(json){
    return "data="+ JSON.stringify(json);
}

function t2s(text){
    return text.replace(/\t/g, '    ');
}

//textarea正则匹配pre, tab表格替换成4个空格
function escapeHtml(text){
    return text.replace(/(&lt;)|(&gt;)|\t/g, function(match, pos, s){
        switch(match){
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '\t':
                return '    ';
        }
    })
}

// 全角转半角
function ToCDB(str){
    var tmp = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === 12288) {
            tmp += String.fromCharCode(str.charCodeAt(i) - 12256);
            continue;
        }
        if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
            tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else {
            tmp += String.fromCharCode(str.charCodeAt(i));
        }
    }
    return tmp;
}

// 半角转全角
function ToDBC(txtstring) {
    var tmp = "";
    for (var i = 0; i < txtstring.length; i++) {
        if (txtstring.charCodeAt(i) === 32) {
            tmp = tmp + String.fromCharCode(12288);
        }
        if (txtstring.charCodeAt(i) < 127) {
            tmp = tmp + String.fromCharCode(txtstring.charCodeAt(i) + 65248);
        }
    }
    return tmp;
}
// 防抖动事件
function debounce(cb,ms,flag){
    var t = null;
    return function(){
        var _this = this;
        var args = arguments;
        var C = function(){
            t = null;
            flag || cb.apply(_this, args);
        };
        var A = flag && !t;
        clearTimeout(t);
        t = setTimeout(C, ms);
        A && cb.apply(_this, args);
    }
}