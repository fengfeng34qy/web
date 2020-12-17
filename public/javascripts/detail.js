// &gt; 转 <
function toTag(str){
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function toBr(str){
    return str.replace(/\\n/g, '<br>');
}
var oCon = $('#content');
oCon.html(escapeHtml(oCon.html()));
$('.edit').click(function(){
    var index = window.location.pathname.lastIndexOf('/') + 1;
    var id = window.location.pathname.slice(index);
    $.get('/admin/article/update/'+id, function(data){
        if(data.status === 201){
            moveStart(data.message);
            return ;
        }
        if(typeof data == 'string'){
            window.location.href='/admin/article/update/'+id;
            return ;
        }
        moveStart('请先登录！');
    })
});

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

var textarea = document.getElementById('inputContent');

// escapeHtml();
function escapeHtml(text){
    return text.replace(/(&lt;)|(&gt;)|(&nbsp;)|(&amp;)/g, function(match, pos, s){
        switch(match){
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '&amp;':
                return '&';
            case '&nbsp;':
                return '\s';
        }
    })
}
