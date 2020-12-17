
var AipSpeechClient = require("baidu-aip-sdk").speech;
var HttpClient = require("baidu-aip-sdk").HttpClient;

// 设置APPID/AK/SK
var APP_ID = "19454866";   // 你的 App ID
var API_KEY = "WikjZPuyKWnTZfmH8OI00UN2"; // 你的 Api Key
var SECRET_KEY = "s57WrLD0M8NkmTlwkYZq8uNYQylraXtb";  // 你的 Secret Key

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

// 设置request库的一些参数，例如代理服务地址，超时时间等
// request参数请参考 https://github.com/request/request#requestoptions-callback
HttpClient.setRequestOptions({timeout: 5000});

// 也可以设置拦截每次请求（设置拦截后，调用的setRequestOptions设置的参数将不生效）,
// 可以按需修改request参数（无论是否修改，必须返回函数调用参数）
// request参数请参考 https://github.com/request/request#requestoptions-callback
HttpClient.setRequestInterceptor(function(requestOptions) {
  // 查看参数
  // console.log(requestOptions)
  // 修改参数
  requestOptions.timeout = 5000;
  // 返回参数
  return requestOptions;
});

var fs = require('fs');

// 语音合成
exports.text2audio = function(req, res, next) {
  let text = req.body.text;
  let parame = req.body.parame;
  let fileName = parseInt(Math.random() * 1000000);
  client.text2audio(text, parame).then(function(result) {
    if (result.data) {
      fs.writeFileSync('/home/work/project/web/public/speech/' + fileName + '.mp3', result.data);
      res.send({
        ReturnCode: '000000',
        body: {
          onlineLink: 'https://www.sunfengfeng.com/speech/' + fileName + '.mp3'
        },
        onlineLink: 'https://www.sunfengfeng.com/speech/' + fileName + '.mp3',
        message: '成功'
      });
    } else {
      // 服务发生错误
      res.send({ReturnCode: '999999', body: result, message: ''});
    }
}, function(e) {
  // 发生网络错误
  res.send({ReturnCode: '999999', body: e, message: '发生网络错误'});
});
}