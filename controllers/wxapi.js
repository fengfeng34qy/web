let request = require('request');
const axios = require('axios');
let wx = require('../../utils/wx');
let qs = require("qs")

// 变量声明
const CONFKEY = "dev"
const BASECONF = {
    "dev":{
      baseUrl:'https://api.weixin.qq.com/',
    },
    "prod":{
      baseUrl:'https://api.weixin.qq.com/'
    }
}[CONFKEY]

// 创建rq请求并设置基础信息
const rq = axios.create({
    baseURL: BASECONF.baseUrl,
    timeout: 10000,
    headers: { // 请求头设置，（微信云开发数据APi采用application/json格式入参，否则导致47001错误）
        "Content-Type":"application/json; charset=utf-8"
    }
})

// axios 请求头拦截器
// rq.interceptors.request.use(req => {
//     // 有需要的，在此处拦截请求入参进行处理
//     return req
// },error => {
//     return Promise.reject(error)
// })

// axios 返回信息拦截器
// rq.interceptors.response.use(res => {
//     return res.data
// },error => {
//     return Promise.reject(error)
// })

// const $rq = { // 封装get,post请求

//     get(url,params) { // axios.get(url,config)
//         return rq.get(url,{
//             params: params
//         })
//     },
//     post(url,params={}) {
//         return rq({ // axios(config)
//             url: url,
//             method: 'post',
//             data:params
//         })
//     }
// }

exports.getAccessToken = function(req, res, next) {
  let url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx6b817e52d885d041&secret=e1c9be777d187b1511dc31ec5d7fb465';
  request(url, function(error, response, body) {
    res.send({ReturnCode: '000000', body: response});
  }, function(e) {
    res.send({ReturnCode: '999999', body: e});
  })
}

exports.wxapi = function(req, res, next) {
  let access_token = req.body.access_token
  let serviceCode = req.body.service_code
  switch(serviceCode) {
    case '1001':
      wx.mediaCheckAsync(req, res);
  }
  return;
  let url = 'https://api.weixin.qq.com/wxa/media_check_async?access_token=' + access_token
  let data = {
    "media_url": req.body.media_url,
    "media_type": req.body.media_type
  }
  rq({
    url: url,
    method: 'post',
    data: data
  }).then(function(response) {
    console.log(response.data)
    res.send({ReturnCode: '000000', body: response.data})
  })
}