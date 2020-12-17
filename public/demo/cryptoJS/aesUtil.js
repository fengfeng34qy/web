define(['crypto-js'],
function(CryptoJS) {

	function AesUtil(){
		this.key = CryptoJS.enc.Latin1.parse('25t78vtkde4ew6y9');
		this.iv = CryptoJS.enc.Latin1.parse('gi215c6c8h3pwgg8');
	}

	// 加密
    AesUtil.prototype.encryptFunc = function(dataStr){
		var key = this.key;
		var iv = this.iv;

		var encrypted = CryptoJS.AES.encrypt(
			dataStr, key,
			{
				iv: iv,
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.ZeroPadding
			});
		return encrypted.toString().replace(/\+/g, '%2B');
	};

	// 解密
    AesUtil.prototype.decryptFunc = function(dataStr){
		var key = this.key;
		var iv = this.iv;

		var decrypted = CryptoJS.AES.decrypt(
			dataStr,
			key,
			{iv: iv, padding: CryptoJS.pad.ZeroPadding}
		);
		return decrypted.toString(CryptoJS.enc.Utf8);
	};

	return new AesUtil();

});
