

### 密文模式调用起密码键盘
```js
let getPinResult = await PinKeypad.getPinAsync(this.getPinInputPara);
```

### 通过卡号获取密文
```js
let pinBlock = await PinKeypad.getPinBlockExByCardNoAsync(this.cardNumber);
```

### 明文模式调用起密码键盘
```js
let getPinResult = await PinKeypad.getDataAsync(this.getPinInputPara);
```

### 等待密码键盘一个按键返回
```js
await PinKeypad.waitKeyAsync();
```

### 获取密文
```js
/**
 * 输入参数：
 * {
 *    "KeyEncKey": null,
 *    "Key": 'PinKey',
 *    "Format": 2,
 *    "Padding": 0,
 *    "XORData": null,
 *    "CustomerData": '6225888888888888'
 */
let pinBlock = await PinKeypad.getPinBlockAsync(getPinInputPara);
```

### 取消
```js
PinKeypad.cancelAsync();
```

### 获取密码键盘状态
```js
let pinKeyStatus = await PinKeypad.getStatusAsync();
```
