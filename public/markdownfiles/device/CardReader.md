
### 读银行卡步骤
```js
// 1.执行后就可以插卡了
await CardReader.readCardChipAsync();

// 2.上电
await CardReader.powerUpAsync();

// 3.通过借记卡 ID 获取卡信息
await CardReader.pbocGetAppInfoByDebitAIDAsync();

// 4.通过输入部分参数初始化应用 第一个授权金额，固定 12 位长度字符串，以分为单位
// 参数1：授权金额，固定 12 位长度字符串，以分为单位
// 参数2：交易类型，常用类型:00:消费,01:现金,21:存款,31:余额,40:转账,60:圈存
await CardReader.pbocAppInitializeByParamsAsync("000000000000", "00");

// 5.读取卡片数据
let cardData = await CardReader.pbocReadAppDataAsync();
```

### 吞卡
```js
CardReader.retainCardAsync()
```

### 退卡
```js
CardReader.ejectCardAsync()
```

### 取消读卡
```js
CardReader.cancelAsync()
```

### 等待卡片被取走
```js
await CardReader.waitCardTakenAsync()
```

### 获取设备状态
```js
await CardReader.getStatusAsync()
```