# 磁条刷卡器（SPCardReader）

### 导入模块
```js
import { MagcardReader } from 'awp-plugin-device-magcard-reader'
```

### 读磁条卡
```js
let result = await MagcardReader.readAsync();
```

### 取消读磁条卡
```js
MagcardReader.cancelAsync();
```

### 重置设备
```js
/*
 * resetAction参数说明
 * 类型 Number 1-NoAction, 2-Eject, 3-Retain
 */
MagcardReader.resetAsync(resetAction);
```