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
    var decoration = 1300;  //初始速度
    var oFen = 0;
    var score = document.getElementById('score');

    oMask.onclick = function(ev){
        ev.cancelBubble = true;
    };
    oBtn.onclick = function(ev){
        ev.cancelBubble = true;
        oMask.style.display = 'none';
        this.style.display = 'none';
        move(oBall,{left:rnd(0,targetW),top:targetH+50},{time:decoration,half:function(){
            move(oBall,{left:rnd(0,targetW),top:0},{time:decoration,end:function(){
                
            }})
        }},qp_l)
    };
    qp_h.addEventListener('animationend',function(){
        this.className = '';
    });
    qp_l.addEventListener('animationend',function(){
        this.className = '';
    })
    dragM(qp_h);
});

