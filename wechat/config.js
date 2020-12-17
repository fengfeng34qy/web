'use strict';

var path = require('path');
var util = require('./libs/util');
var wechat_file = path.join(__dirname, './config/wechat.txt');
//个人正式公众号 (个人公众号不能认证，很多功能不能用)
// var config = {
//     wechat: {
//         appID: 'wxf9519c4681b18727',
//         appSecret: 'ca6a7dfb84bbaa2f9e284d0ff0cf8051',
//         token: 'sunfengfengdetoken',
//         getAccessToken: function(){
//             return util.readFileAsync(wechat_file);
//         },
//         saveAccessToken: function(data){
//             data = JSON.stringify(data);
//             return util.writeFileAsync(wechat_file, data);
//         }
//     }
// };
//测试公众号
var config = {
    wechat: {
        appID: 'wxfec2acc18f30caee',
        appSecret: '401c956424ea1114b5aa536a26703cb3',
        token: 'sunfengfengdetoken',
        getAccessToken: function(){
            return util.readFileAsync(wechat_file);
        },
        saveAccessToken: function(data){
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file, data);
        }
    }
};
module.exports = config;