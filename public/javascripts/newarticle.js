var textarea = document.getElementById('inputContent');
//判断is手机浏览器
if(mobilecheck()){
    $('<link/>', {
        media: 'all',
        rel: 'stylesheet',
        type: 'text/css',
        href: 'http://simditor.tower.im/assets/styles/mobile.css'
    }).appendTo('head')
}
/*textarea keydown事件*/
textarea.onkeydown = function(e){
    if(e.ctrlKey){
        if(e.keyCode === 86){
            setTimeout(function(){
                var html = t2s(textarea.value);
                textarea.value = html;
            },0);
        }
    }
};
/*
 * 创建文章提交事件*/
$('#input-btn').click(function(){
    var articleTi = $('#inputTitle').val();
    var articleCon = $('#inputContent').val();
    var articleAr = $('#inputAuthor').val();
    var articleUrl = $('#inputUrl').val();
    var oId = $('#inputId');
    var id = '';
    if(oId){
        id = oId.val();
    }
    isPass(id,articleAr,articleTi,articleUrl,articleCon,createArticleFromServe);
});

function isPass(id,articleAr,articleTi,articleUrl,articleCon, cb){
    if(!articleTi){
        alert('请输入文章标题');
        return false;
    }else if(articleTi.length > 48){
        alert('最大48个字节');
        return false;
    }else if(!articleCon){
        alert('请输入文章内容');
        return false;
    }
    cb(id,articleAr,articleTi,articleUrl,articleCon);
}
function createArticleFromServe(id,articleAr,articleTi,articleUrl,articleCon){
    var post_data = {
        article: {
            _id: id,
            author: articleAr,
            title: articleTi,
            url: articleUrl,
            content: articleCon
        }
    };
    $.ajax({
        method: 'post',
        url: '/admin/article',
        data: post_data,
        success: function(data){
            window.location.href = '/';
        },
        error: function(e){
            console.log(e);
        }
    })
}