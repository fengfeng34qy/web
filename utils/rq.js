// 模块引用
let axios = require("axios")
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
rq.interceptors.request.use(req => {
    // 有需要的，在此处拦截请求入参进行处理
    return req
},error => {
    return Promise.reject(error)
})

// axios 返回信息拦截器
rq.interceptors.response.use(res => {
    return res.data
},error => {
    return Promise.reject(error)
})

const $rq = { // 封装get,post请求

    get(url,params) { // axios.get(url,config)
        return rq.get(url,{
            params: params
        })
    },
    post(url,params={}) {
        return rq({ // axios(config)
            url: url,
            method: 'post',
            data:params
        })
    }
}

module.exports = {
    $rq
}