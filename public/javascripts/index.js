$(function(){
    var nameReg = /^[a-zA-Z0-9_]{3,16}$/;                        //用户名正则
    var nicknameReg = /^([A-Za-z]|[\u4E00-\u9FA5]){2,16}$/;     //昵称正则

    /*登录*/
    $('#signin').click(function(){
        var name = $('#signinName').val();                       //用户名
        var password = $('#signinPassword').val();               //密码
        userSigninFromServe(name, password);
    });

    /*
    * 注册 */
    $('#signup').click(function(){
        var name = $('#signupName').val();  //用户名
        var nickname = $('#nickname').val();    //昵称
        var password = $('#signupPassword').val();  //密码
        var sure = $('#passwordSure').val();  //确认密码
        if(!name){
            alert('请输入用户名！');
            return ;
        }else if(!nameReg.test(name)){
            alert('输入的用户名不对');
            return ;
        }else if(!nicknameReg.test(nickname)){
            alert('请输入正确的昵称');
            return ;
        }
        if((password===sure)&&(password.length>2)){
            userSignupFromServe(name, nickname, password);
        }else if(password!==sure){
            alert('两次密码不一直！')
        }else{
            alert('密码长度必须大于3位！')
        }
    });

    /*
    * 留言提交按钮(主页)*/
    $('.liuyanbtn-home').click(function(){
        var name = $('.author').val() || '匿名用户';
        var oLiuyan = $('.liuyanerea-home');
        var content = oLiuyan.val();
        content = content.replace(/\s/g, '');
        if(!content){
            alert('请输入内容');
            return ;
        }
        oLiuyan.val('');
        var post_data = {
            message: {
                name: name,
                content: content
            }
        };
        $.ajax({
            method: 'post',
            url: '/admin/message',
            data: post_data,
            success: function(data){
                window.location.reload();
            },
            error: function (e) {
                console.log(e);
            }
        })
    });

    /*
    * 返回顶部*/
    $('.backtop').click(function(){
        backTop($('.backtop')[0],20);
        return false;
    });

    /*
    * 搜索文章事件*/
    $('#search').on('keydown', function(e){
        if(e.keyCode === 13){
            var keyword = $('#search').val();
            if(!keyword)return;
            location.href = '/article/search?keyword=' + keyword + '&page=0';
        }
    });

    /*
    *  删除文章*/
    $('.delBtn').on('click', function(e){
        var id = this.getAttribute('data-id');
        myApp.modal({
            title: '确认删除？',
            confirm: function(){
                deletArtile(id);
            }
        });
    })
});

function userSigninFromServe(name, password){
    var pwdWran = document.getElementById('pwdWran');
    var userWran = document.getElementById('userWran');
    if(!name){
        userWran.innerHTML = '用户名不能为空';
        return;
    }
    if(!password){
        pwdWran.innerHTML = '密码不能为空';
        return;
    }
    var post_data = {
        user: {
            name: name,
            password: password
        }
    };
    $.ajax({
        method: 'post',
        url: '/user/signin',
        data: post_data,
        success: function(data){
            console.log(data);
            if(data.H_ret_status === 'S'){
                console.log(data);
                // $('#signinModal').modal('hide');
                window.location.reload();
            }else{
                $('#userWran').html(data.H_ret_desc);
            }
            // $('#signinModal').modal('hide');
            // window.location.reload();
        },
        error: function(err){
            console.log(err);
        }
    });
}

function userSignupFromServe(name, nickname, password){

    var post_data = {
        user: {
            name: name,
            nickname: nickname,
            password: password
        }
    };
    $.ajax({
        method: 'post',
        url: '/user/signup',
        data: post_data,
        success: function(data){
            if(data.status === 1006){
                $('.user-has').css('display', 'inline-block');
                return false;
            }
            console.log(data);
            $('#signupModal').modal('hide');
            window.location.reload();
        },
        error: function(e){
            console.log(e);
        }
    })
}

function deletArtile(id){
    var post_data = {
        data: {
            id: id
        }
    };
    $.ajax({
        method: 'post',
        url: '/admin/delete',
        data: post_data,
        success: function(data){
            console.log(data);
            if(data.errorStatus === 'F'){
                moveStart(data.message);
            }else{
                window.location.reload();
            }
        },
        error: function (e) {
            console.log(e);
        }
    })
}

function moveStart(text){
    var oDiv = $('<div class="tip tip-alert yh">'+text+'<a href="javascript:;">&times;</a></div>');
    $('body').append(oDiv);
    $('.tip-alert').on('animationend', function(){
        $(this).addClass('tip-out');
        moveEnd();
    });
}

function moveEnd(){
    $('.tip-out').on('animationend', function(){
        $('div').remove('.tip-out');
    })
}

/*
* 让textarea支持tab键*/
/*var myInput = document.getElementsByTagName("textarea")[0];
str = "    ";
if(myInput.addEventListener ) {
    myInput.addEventListener('keydown',this.keyHandler,false);
} else if(myInput.attachEvent ) {
    myInput.attachEvent('onkeydown',this.keyHandler);
}*/
/*function keyHandler(e) {
    var TABKEY = 9;
    if(e.keyCode == TABKEY) {
        insertText(myInput,str);
        if(e.preventDefault) {
            e.preventDefault();
        }
    }
}*/
/*function insertText(obj,str) {
    if (document.selection) {
        var sel = document.selection.createRange();
        sel.text = str;
    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
        var startPos = obj.selectionStart,
            endPos = obj.selectionEnd,
            cursorPos = startPos,
            tmpStr = obj.value;
        obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
        cursorPos += str.length;
        obj.selectionStart = obj.selectionEnd = cursorPos;
    } else {
        obj.value += str;
    }
}*/

/*
* 百度*/
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

