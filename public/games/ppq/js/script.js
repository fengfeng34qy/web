function domRead(fn){
    document.addEventListener('DOMContentLoaded',function(){
        fn && fn();
    },false);
};
domRead(function(){
    var oTable = document.getElementById('table');  //获取乒乓球桌
    var oBall = document.getElementById('ball');    //获取乒乓球
    var targetH = oTable.offsetHeight;  //桌子的高度
    var targetW = oTable.offsetWidth;   //桌子的宽度
    var oBallW = oBall.offsetWidth;     //小球的宽度
    var qp_l = document.getElementById('pc_bat');   //蓝色球拍
    var qp_h = document.getElementById('person_bat');   //红色球拍
    var oMask = document.getElementById('mask');
    var oBtn = document.getElementById('ready_btn');
    var oRuler = document.getElementById('ruler');
    var over = document.getElementById('over');
    var decoration = 1300;  //初始速度
    var oFen = 0;
    var score = document.getElementById('score');


    oMask.onclick = function(ev){
        ev.cancelBubble = true;
    };
    qp_h.style.transform = 'translateY(-1rem)';
    var timer = null;
    oBtn.onclick = function(ev){
        ev.cancelBubble = true;
        var startTime = new Date().getTime();
        
        oMask.style.display = 'none';
        this.style.display = 'none';

        timer = setInterval(function(){
            // score.innerHTML = iNow++;
        },1000);

        score.innerHTML = oFen;
        var oMid = null;
        var oLeft = rnd(0,targetW);
        fnd();
        function fnd(){
            move(oBall,qp_h,startTime,{left:oLeft,top:targetH+50},{time:decoration,half:function(){     //打过来
                targetH = 0;
                document.title = decoration;
                if(oMid){
                    document.body.removeChild(oMid);
                }
                oMid = new Audio();
                oMid.src = 'mp3/video2.mp3';
                oMid.play();
                document.body.appendChild(oMid);
                // document.body.removeChild(oMid);
                if(decoration<=800){
                    decoration-=25;
                }else if(decoration<=550){
                    decoration-=15;
                }else{
                    decoration-=36;
                }
                if(decoration<=300) decoration=300;
                oLeft = rnd(45,targetW-65);

                qp_l.style.left = oLeft+'px';
                move2(oBall,startTime,{left:oLeft,top:targetH},{time:decoration,end:function(){  //打回去
                    oMid.play();
                    // document.body.removeChild(oMid);
                    oLeft = rnd(0,targetW);
                    targetH = oTable.offsetHeight;
                    fnd();
                }});
            },end:function(){
                targetH = oTable.offsetHeight;
                oMask.style.display = 'block';
                oBtn.style.display = 'block';
                over.style.display = 'block';
                clearInterval(timer);
                decoration = 1300;

            }});
        }
    };
    //----------------------------------------------------------
    qp_h.addEventListener('animationend',function(){
        this.className = '';
    });
    qp_l.addEventListener('animationend',function(){
        this.className = '';
    });

    dragM(qp_h,oTable);

});