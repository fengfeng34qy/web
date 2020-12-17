function rnd(n,m){
    return parseInt(Math.random()*(m-n))+n;
}
function getStyle(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function move(obj,obj2,sTime,json,options){
    clearInterval(obj.timer);
    options=options || {};
    options.time=options.time || 800;
    options.type=options.type || 'linear';

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
        var endTime = new Date().getTime();
        document.getElementById('score').innerHTML = endTime - sTime + '毫秒';
        if(testColl2(obj,obj2)){

            options.half && options.half();
            // return ;
            // clearInterval(obj.timer);
        }else{
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
        }

        if(n==iCount){
            clearInterval(obj.timer);
            if(obj.offsetTop){
                setTimeout(function(){
                    obj.style.left = '50%';
                    obj.style.top = '0'
                },1000);
            }
            options.end && options.end();
        }
    },30);
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
function testColl2(obj,obj1){
    var l=obj.offsetLeft;
    var t=obj.offsetTop;
    var r=obj.offsetLeft+obj.offsetWidth;
    var b=obj.offsetTop+obj.offsetHeight;

    var l1=obj1.offsetLeft;
    var t1=obj1.offsetTop;
    var r1=obj1.offsetLeft+obj1.offsetWidth;
    var b1=obj1.offsetTop+obj1.offsetHeight;

    if(r>l1 && b>t1 && l<r1 && t<b1){
        return true;
    }else{
        return false;
    }
}
//手机端拖拽
function dragM(obj,obj2){
    var x=0;
    var y=0;
    var oW= obj2.clientWidth;
    var center = obj2.clientWidth/2 - obj.clientWidth/2;

    obj.addEventListener('touchstart',function(ev){

        var disX=ev.targetTouches[0].pageX-obj.offsetLeft;
        // var disY=ev.targetTouches[0].pageY-y;
        obj.className = 'pai';
        var id=ev.targetTouches[0].identifier;

        function fnMove(ev){
            if(id==ev.targetTouches[0].identifier){
                x=ev.targetTouches[0].pageX-disX;

                // y=ev.targetTouches[0].pageY-disY;
                // obj.style.transform='translate('+x+'px,'+y+'px)';
                var scale = 90/center;
                if(x<=0)x=0;

                if(x>obj2.clientWidth){
                    x = obj2.clientWidth;
                }
                obj.style.left = x+'px';
                obj.style.transform = 'rotate('+ ((oW/2-x)*scale) +'deg)';
            }

        }

        function fnEnd(){

            if(id==ev.changedTouches[0].identifier){
                document.removeEventListener('touchmove',fnMove,false);

                document.removeEventListener('touchend',fnEnd,false);
            }
        }

        document.addEventListener('touchmove',fnMove,false);

        document.addEventListener('touchend',fnEnd,false);
        ev.preventDefault();

    },false);
}

