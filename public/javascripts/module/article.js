define(function(){
    var App = {
        delArticle: function(id){
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
    };
    return App
});