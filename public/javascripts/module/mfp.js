define(['jquery','mloading'],function($, mloading){
    function Mfp() { }
    var mfp = new Mfp();
    mfp.ajax = function(obj, success, error){
        console.log(obj.url);
        $("body").mLoading('show');
        $.ajax({
            method: 'post',
            url: obj.url,
            data: obj.data,  // 加encodeURI是为了把汉字转换ASCII编码
            timeout: 6000,
            success: function(data){
                console.log(data);
                $("body").mLoading('hide');
                if(data.H_ret_code === '000000'){
                    success(data);
                }else{
                    error(data);
                }
            },
            error: function (e) {
                console.log(e);
                $("body").mLoading('hide');
            }
        })
    };

    // 注册
    mfp.register = function(obj, success){
        var post_data = {
            url: 'http://www.sunfengfeng/user/signup',
            data: {
                name: obj.name,
                nickname: obj.nickname,
                password: obj.password
            }
        };
        mfp.ajax(post_data, function(response){
            if(success){
                success(response);
            }
        }, function(error){
            console.log(error);
        });
    };

    return mfp;
});