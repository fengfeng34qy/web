const axios = require('axios');
let deviceConfig = require('../config/xcxConfig/chat-config');

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

let wx = {
  mediaCheckAsync: function(req, res) {
    let url = 'wxa/media_check_async?access_token=' + req.body.access_token
    let data = {
      "media_url": req.body.media_url,
      "media_type": req.body.media_type
    }
    rq({
      method: 'post',
      url: url,
      data: data
    }).then(function(response) {
      res.send({ReturnCode: '000000', body: response.data})
    })
  },
  // 返回外设调用数据
  deviceAsync: function(req, res) {
    res.send({ReturnCode: '000000', body: deviceConfig.cfgList})
  }
}

module.exports = wx;