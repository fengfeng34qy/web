# UK发放器（UKeyDispenser）

### 发UK
```js
// 调用示例：
import { UKeyDispenser } from 'awp-plugin-device-ukey-dispenser';
let result = await UKeyDispenser.dispenseCardAsync(
 {
  "Present": false,
  "Number": 0
 }
)

// 输出示例：
result = {
 "ExcuteResult": 0,
 "IsSuccess": true
}
```
### 退出UK
```js
// 调用示例：
import { UKeyDispenser } from 'awp-plugin-device-ukey-dispenser';
let result = await UKeyDispenser.ejectCardAsync();

// 输出示例：
result = {
 "ExcuteResult": 0,
 "IsSuccess": true
}
```
### 获取uk箱信息
```js
// 调用示例：
import { UKeyDispenser } from 'awp-plugin-device-ukey-dispenser';
let result = await UKeyDispenser.getCardUnitInfoAsync();

// 输出示例：
result = [
  {
    "HardwareSensor": false, //是否启动硬件传感器；备注：启动硬件传感器后，当 Count 值达到 Threshold数量时产生事件,具体参考 wosa 文档。
    "Status": 0, //卡箱状态；0:正常 1:卡少 2:卡箱空 3:卡箱不可用 4:卡箱不存在 5:卡量充足 6 卡箱满 7:状态不可用
    "Threshold": 0, //阈值数量
    "RetainCount": 0, //吞卡数量
    "Count": 0, //当前数量
    "InitialCount": 0, //初始数量
    "Type": 0, //卡箱类型 1:发卡箱，2:吞卡箱
    "CardName": null, //卡名称
    "Number": 0 //卡箱号
    },
    {
    "HardwareSensor": false,
    "Status": 0,
    "Threshold": 0,
    "RetainCount": 0,
    "Count": 0,
    "InitialCount": 0,
    "Type": 0,
    "CardName": null,
    "Number": 1
  }
]
```