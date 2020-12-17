
updateLink();
function updateLink(){
    var url = window.location.href;
    // 如果为搜索页面
	if(url.indexOf('search?') > -1){

        var start = url.indexOf('keyword=') + 8;
        var end = url.indexOf('&page');
        var keyword = url.substring(start, end);

		var box = document.getElementsByClassName('pagination')[0];
		var aLi = box.getElementsByTagName('li');
		for(var i=0; i<aLi.length; i++){
		    if(aLi[i].children[0]){
	            aLi[i].children[0].href = '/article/search?keyword=' + keyword + '&page=' + i;
	        }
		}
	}
	
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