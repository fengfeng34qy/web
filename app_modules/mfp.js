function Mfp() { };

// 小写金额转大写
Mfp.prototype.Amount = function(num){
    if (isNaN(num)) return "无效数值！";
    var strPrefix = "";
    if (num < 0) strPrefix = "(负)";
    num = Math.abs(num);
    if (num >= 1000000000000) return "无效数值！";
    var strOutput = "";
    var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
    var strCapDgt = '零壹贰叁肆伍陆柒捌玖';
    num += "00";
    var intPos = num.indexOf('.');
    if (intPos >= 0) {
        num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
    }
    strUnit = strUnit.substr(strUnit.length - num.length);
    for (var i = 0; i < num.length; i++) {
        strOutput += strCapDgt.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
    }
    return strPrefix + strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
};

// 去除前后空格 mfp.trim('f d ', g)
Mfp.prototype.trim = function(str, is_global){
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() === "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
};

// 校验身份证号码
Mfp.prototype.checkIDCard = function(idCard, failEvent){
    if (typeof failEvent !== "function") {
        failEvent = function () { };
    }
    return checkIdcard(idCard);

    function checkIdcard(idcard) {

        idcard = idcard + "";

        if (!idcard) {
            failEvent("证件号码不可为空");
            return false;
        }

        var Errors = new Array("验证通过!", "身份证号码位数不对!", "身份证号码出生日期超出范围或含有非法字符!",
            "身份证号码校验错误!", "身份证地区非法!");
        var area = {
            11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海",
            32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南",
            44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西",
            62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
        }

        var idcard, Y, JYM;
        var S, M;
        var idcard_array = new Array();
        idcard_array = idcard.split("");

        //地区检验
        if (area[parseInt(idcard.substr(0, 2))] == null) {
            failEvent(Errors[4]);
            return false;
        }
        //身份号码位数及格式检验
        var ereg = "";
        switch (idcard.length) {
            case 15:
                if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 ||
                    ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 &&
                        (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
                    ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
                } else {
                    ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
                }
                if (ereg.test(idcard)) {
                    // return true;
                    //身份证不再允许15位通过
                    failEvent(Errors[1]);
                    return false;
                } else {
                    failEvent(Errors[1]);
                    return false;
                }
                break;
            //18位身份号码检测/出生日期的合法性检查
            case 18:
                if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 &&
                        parseInt(idcard.substr(6, 4)) % 4 == 0)) {
                    //闰年出生日期的合法性正则表达式
                    ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
                } else {
                    //平年出生日期的合法性正则表达式
                    ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;

                }
                if (ereg.test(idcard)) {
                    //测试出生日期的合法性计算校验位                
                    S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                        + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
                        + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
                        + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
                        + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
                        + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
                        + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
                        + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
                    Y = S % 11;
                    M = "F";
                    JYM = "10X98765432";
                    M = JYM.substr(Y, 1);//判断校验位
                    if (M == idcard_array[17]) {
                        return true; //检测ID的校验位
                    }
                    else {
                        failEvent(Errors[3]);
                        return false;
                    }
                } else {
                    failEvent(Errors[2]);
                    return false;
                }
                break;
            default:
                failEvent(Errors[1]);
                return false;
                break;
        }

    }
};

// 获取当前时间6位数字
Mfp.prototype.getCurrentDate = function(){
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return ''+y+(m<10?'0'+m:m)+(d<10?'0'+d:d);
};

module.exports = new Mfp();