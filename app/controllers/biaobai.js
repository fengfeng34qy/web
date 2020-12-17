var Biaobai = require('../models/biaobai-models');

exports.createBiaobai = function (req, res) {
    var biaobaiObj = req.body.biaobai;
    Biaobai.find({}, function(err, content){
        if(err){
            console.log(err);
            res.send(err);
            return;
        }
        content.sort(function(a, b) {
            return a.seqNo - b.seqNo
        })
        let maxNo = 1000;
        content.forEach((item) => {
            if (item.seqNo > maxNo) {
                maxNo = item.seqNo;
            }
        })
        maxNo = +maxNo + 13
        biaobaiObj.seqNo = '' + maxNo
        var biaobai = new Biaobai(biaobaiObj);
        biaobai.save(function(err, biaobai){
            if(err){
                console.log(err);
                res.send(err);
                return;
            }
            res.send(biaobai);
        })
    })
};

exports.biaobaiDetail = function(req, res) {
    var biaobaiObj = req.body.biaobai;
    console.log(biaobaiObj);
    let data = [];
    Biaobai.find({}, function(err, content){
        if(err){
            console.log(err);
            res.send(err);
            return;
        }
        for (let i = 0; i < content.length; i++) {
            if (content[i].seqNo === biaobaiObj.seqNo) {
                data.push(content[i])
                break;
            }
        }
        if (data.length > 0) {
            res.send({status: 200, data: data});
            
        } else {
            res.status(200).send({status: 500, data: {message: '序列号不存在'}})
        }
    })
}