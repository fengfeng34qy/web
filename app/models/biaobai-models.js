var mongoose = require('mongoose');
var BiaobaiSchema = require('../schemas/biaobai-schemas');
var Biaobai = mongoose.model('Biaobai', BiaobaiSchema);

module.exports = Biaobai;