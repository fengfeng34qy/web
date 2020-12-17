# UK读取器（UKeyReader）

### 读取 Ukey 盒子上的二维码/条码
```js
import { UKeyReader } from 'awp-plugin-device-ukey-reader'

await UKeyReader.readAsync()
```

### 吞UKey
```js
import { UKeyReader } from 'awp-plugin-device-ukey-reader'

UKeyReader.retainCardAsync()
```
### 等待卡片被取走
```js
import { UKeyReader } from 'awp-plugin-device-ukey-reader'

await UKeyReader.waitCardTakenAsync()
```